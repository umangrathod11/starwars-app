import React from 'react';

export const UseRefDemo = () => {
    const buttonRef = React.useRef(null);
    const [randomNumber, setRandomNumber] = React.useState(Math.random());

    const handleClick = () => {
        const currentValue = buttonRef.current.style.padding;
        if (!currentValue) {
            buttonRef.current.style.padding = `16px`;
        } else {
            buttonRef.current.style.padding = Number(currentValue.replace('px', '')) + 4 + `px`;
        }
    }
    return (
        <div>
            <p>{new Date().getTime()}</p>
            <button ref={buttonRef} onClick={handleClick}>
                Click me 2 Increase Padding
            </button>

            <br />
            <br />
            
            <p>Random Number : {randomNumber}</p>
            <button onClick={() => setRandomNumber(Math.random())}>
                Generate Random Number
            </button>
        </div>
    )
}

