import React from 'react';
import { Button } from '../Button/button';

const vowels = {
    a: true,
    i: true,
    o: true,
    u: true,
    e: true,
    A: true,
    I: true,
    O: true,
    U: true,
    E: true,
}

const getVowelsCount = (str) => {
    let c = 0 ;
    for(let i = 0; i < str.length; i++) {
        if ( vowels[str[i]]) c++;
    }
    console.log(`Counting vowels for ${str} --> ${c}`);
    return c;
}

export const VowelsCount = () => {
    const [name, setName] = React.useState('');
    const [randomNum, setRandomNum] = React.useState(Math.random());

    // const totalVowelsInName = getVowelsCount(name); // This will be called on every render
    const totalVowelsInName = React.useMemo(() => {
        return getVowelsCount(name);
    }, [name]);

    return (
        <div className="formContainer">
            <div className='fieldContainer'>
                <Button onClick={() => setRandomNum(Math.random())}> Generate Random Nnumber - {randomNum}</Button>
            </div>
            <div className='fieldContainer'>
                <label>Enter Name</label>
                <input onChange={(e) => {
                    setName(e.target.value);
                }} value={name} type="text" />
            </div>
            <div>Total vowels in Name: {totalVowelsInName}</div>
        </div>
    )
}