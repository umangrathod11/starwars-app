import React from 'react';
import { Button } from '../Button/button';

const NamesList = ({ names, cached }) => {
    console.log(`In Names List - Cached - ${cached} - names are - ${names.join(', ')}`)
    return <div>
        {names.join('  -  ')}
    </div>
}

const MemoisedNamesList = React.memo(NamesList);

export const MemoisedDemo = () => {
    const [myState, setMyState] = React.useState({
        name: '',
        number: Math.random(),
        names: [],
    });

    const addName = () => setMyState({ ...myState, name: '', names: [...myState.names, myState.name]   });

    return (
        <div id='memoisedDataEntryForm'>
            <div>
                <div style={{ marginBottom: '1rem'}}>
                    <label>Random Number : {myState.number}</label>
                    <Button onClick={() => {
                        setMyState({ ...myState, number: Math.random() });
                    }} variant="danger" >Click Me To Generate Random Number</Button>
                </div>

                <div>
                    <label>Enter Name</label>
                    <input value={myState.name} type='text' onChange={(e) => {
                        setMyState({ ...myState, name: e.target.value });
                    }} />
                    <Button variant="success" onClick={addName}>Add Name</Button>
                </div>
                
            </div>

            <br />

            <NamesList names={myState.names} order={myState.order} cached={false} />
            <MemoisedNamesList  names={myState.names} order={myState.order} cached />
        </div>
    )
}