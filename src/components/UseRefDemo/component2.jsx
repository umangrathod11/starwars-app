import React from 'react';

export const UseRefDemo = () => {
    const countRef = React.useRef(10);
    const [randomNumber, setRandomNumber] = React.useState(Math.random());

    return (
        <div>
            <p>Current Date Time {new Date().getTime()}</p>
            <button onClick={() => {
                countRef.current++;
            }}>
                Increase Count Ref By 1
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => countRef.current += 5 }>
                Increase Count Ref By 5
            </button>
            <br />
            <br />
            
            <h3>Count Ref Current Value : {countRef.current}</h3>
            <br />
            <br />
            <p>Random Number : {randomNumber}</p>
            <button onClick={() => {
                setRandomNumber(Math.random());
            }}>
                Generate Random Number
            </button>
        </div>
    )
}