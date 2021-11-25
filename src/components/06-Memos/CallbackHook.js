import React, { useState, useCallback } from "react";
import ShowIncrement from './ShowIncrement';
import '../02-useEffect/simpleform.css';
const CallbackHook = () => {

    const [counter, SetCounter] = useState(1);

    //const increment = () => {
      //  SetCounter(counter + 1)
    //}


    const incrementuseCallback = useCallback( ()=>{
        SetCounter(c => c +1)
    }, [SetCounter])


    return (
        <>
            <h1>UseCallback hook</h1>
            <hr />
            <h3>Counter: <small>{counter}</small></h3>
            <ShowIncrement increment={incrementuseCallback}/>
        </>
    )
};


export default CallbackHook;