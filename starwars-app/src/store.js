import create from 'zustand';

const useStore = create((set) => ({
  films: [],
  people: [],
  planets: [],
  species: [],
  starships: [],
  vehicles: [],
  fetchResource: (resource) => {
    // Implement fetching data for each resource here
  },
}));

export default useStore;
