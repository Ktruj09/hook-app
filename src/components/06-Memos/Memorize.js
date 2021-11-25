import React, {useState} from "react";
import { useCounter } from "../../hooks/useCounter";
import Small from './Small'
import '../02-useEffect/simpleform.css'

const Memorize = () =>{

    //estaremos extrayendo counter y increment, siempre lo inicializaremos en 1
    const {counter, increment}=useCounter(1);
    const [show, setShow] = useState(true);
    return (
        <>
            <h1>Memorize</h1>

            <p>
                counter: <Small value={counter}/>
            </p>
            <button 
            onClick={increment}
            className="btn btn-primary"
            >
                Incrementar 
            </button>

            <button
            className="btn btn-info"
            onClick={() =>{
                setShow(!show)
            } }
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )

};

export default Memorize;