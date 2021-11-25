import React, { useState, useMemo } from "react";
import { useCounter } from "../../hooks/useCounter";
import procesoPesado from '../../helpers/procesoPesado';
import '../02-useEffect/simpleform.css'
const MemoHooks = () => {

    const { counter, increment } = useCounter(150);
    const [show, setShow] = useState(true)

  
    //acá decimos que si el counter cambia, necesito una nueva versión
    //del resultado del counter
    const memoProcesoPesado = useMemo(()=> procesoPesado(counter), [counter])

    return (
        <>
            <h1>MemoHooks</h1>
            <hr />

            <h3>Counter: <small>{counter}</small></h3>
            <hr />

            <p>{memoProcesoPesado}</p>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={increment}
            >
                Incrementar
            </button>

            <button
            className="btn btn-outline-info ml-3"
            onClick={()=>{setShow(!show)}}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </>
    )
};

export default MemoHooks;