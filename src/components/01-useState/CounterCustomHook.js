import React from 'react'; 
import './counter.css'
import {useCounter} from '../../hooks/useCounter';
const CounterCustomHook = () =>{

   const {state, increment, decrement, message, reset } = useCounter();
    
    
    return (
        <>
        <h3>Counter with Hook: {state}</h3>


        <button className="btn btn-success" onClick={increment}> +1 </button>
        <button className="btn btn-danger" onClick={decrement}> -1 </button>
        <button className="btn btn-info" onClick={reset}> Reset</button>
        <button className="btn btn-warning" onClick={message}> Click en el botón</button>
        </>

    )
};

export default CounterCustomHook;