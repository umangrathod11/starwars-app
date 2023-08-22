import axios from "axios"; 
import { getAxiosErrorMessage, getErrorState, getLoadingState, getSuccessState } from "./helpers";

export const getActions = (set) => {
    const fetchInstance = async (dataUrl, isLoadingRequired = false) => {
        if (isLoadingRequired) {
            set((oldState) => {
                const data = { ...oldState.data };
                const resourcesById = { ...data.resourcesById };
                resourcesById[dataUrl] = getLoadingState();
                data.resourcesById = resourcesById;
                const newState = { ...oldState, data };
                return newState;
            });
        }
        const parts = dataUrl.split("/");
        const resName = parts[parts.length - 3];
        const id = parts[parts.length - 2];

        try {
            const { data: resource } = await axios.get(`${dataUrl}?res=${resName}_${id}`);    
            set((oldState) => {
                return ({
                    ...oldState,
                    data: {
                        ...oldState.data,
                        resourcesById: {
                            ...oldState.data.resourcesById,
                            [dataUrl]: getSuccessState(resource)
                        }
                    }
                })
            });
        } catch (error) {
            const msg = getAxiosErrorMessage(error, 'Error');
            set((oldState) => {
                return ({
                    ...oldState,
                    data: {
                        ...oldState.data,
                        resourcesById: {
                            ...oldState.data.resourcesById,
                            [dataUrl]: getErrorState(msg)
                        }
                    }
                })
            });
        }
    }

    const fetchList = async (resourceName, page) => {
        let dataUrl = '';
        if (page) {
            dataUrl = page;
        } else {
            dataUrl = `https://swapi.dev/api/${resourceName}/?page=1`;
        }
        
        try {
            set((oldState) => {
                const data = { ...oldState.data };
                const resource = { ...data[resourceName] };
                resource.req = getLoadingState();
                data[resourceName] = resource;
                const newState = { ...oldState, data };
                return newState;
            });
            const { data: response } = await axios.get(dataUrl);
            const urls = [];
            set((oldState) => {
                const data = { ...oldState.data };
                const resource = { ...data[resourceName] };
                resource.req = getSuccessState();
                resource.records = resource.records.concat(response.results);
                resource.next = response.next;
                data[resourceName] = resource;
                resource.records.forEach((rec, index) => {
                    data.resourcesById = {
                        ...data.resourcesById,
                        [`https://swapi.dev/api/${resourceName}/${index+1}/`]: getSuccessState(rec),
                    }
                })
                const newState = { ...oldState, data }
                return newState;
            });
        } catch (error) {
            const msg = getAxiosErrorMessage(error, `Something went wrong while fetching list of ${resourceName}`);
            set((oldState) => {
                const data = { ...oldState.data };
                const resource = { ...data[resourceName] };
                resource.req = getErrorState(msg);
                data[resourceName] = resource;
                const newState = { ...oldState, data }

                return newState;
            });
        }
    }


    return {
        fetchList,
        fetchInstance
    }
}