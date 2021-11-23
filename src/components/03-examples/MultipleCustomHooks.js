import React from "react";
import '../02-useEffect/simpleform.css';
import useFetch from "../../hooks/useFetch";

import { useCounter } from "../../hooks/useCounter";
const MultipleCustomHooks = () => {

//este es el hook counter. 
const {counter, increment} = useCounter(1);

//lo llamamos en ${counter} como ya esta inicializado en uno nos carga una frace,
//al momento de dar clic en el boton ira incrementando el valor y mostrará las frases. 
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    //console.log(state)

    //condición lógica, si se evalua data, entonces retorna data en la posición 0
    const { author, quote } = !!data && data[0]
    console.log(author, quote);

    return (
        <>
            <h1>BreakingBad Frases</h1>
            <hr></hr>

            {
                //acá estamos haciendo una condición if else
                //indicamos que si loading ? esta cargando la data, que muestre 
                //el alert info
                loading ? (
                    <div className="spinner-border" role="status">
                       <span className="sr-only"></span>
                    </div>
                )

                    //una vez cargada y tengamos la data, mostrará la información
                    :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{quote}</p>

                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }

            <button 
            className="btn btn-primary"
            onClick={increment}>
                Siguiente Frase
            </button>



        </>


    )
};

export default MultipleCustomHooks;

