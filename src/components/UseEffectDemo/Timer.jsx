import React, { useEffect, useState } from 'react';

export const Timer = () => {
    const [time, setTime] = useState(new Date().getTime());
    /* In the following effect, we are using the state variable,
        but we are not defining it in the dependency array. It's wrong practice,
        The function inside useEffect will always get the old value of time.

        Add time in the dependency array and see the difference in the log and output
    */
    useEffect(() => {
        setInterval(() => {
            console.log( new Date(time).toString() , ' --> ',  new Date(time + 1000).toString());
            setTime(time + 1000);
        }, 3000);
    }, []);
    
    return(
        <div>
            Current Time : {time} - { new Date(time).toString() }
        </div>
    )
}
    /*  
        here dependency array is empty,
        so this effect will be executed when componnet will mount
        In react 18, effect gets executed twice, but in older react only once.
        In order to execute effect only once (on mount), you can unwrap the App component from StrictMode component.
        But it is not recommended.
    */