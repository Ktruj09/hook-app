import React, { useState } from 'react';
import './counter.css'
const CounterApp = () => {

    const [state, setState] = useState(
        {
            counter1: 10,
            counter2: 20,
            counter3: 30,
            counter4: 40,
        }
    );

    const {counter1, counter2, counter3} = state;

    return (
        <>
            { /* <h1>Counter  {counter} </h1>*/}

            <h1>counter1 {counter1}</h1>
            <h1>counter2 {counter2}</h1>
            <h2>Counter3 {counter3}</h2>
            <button
                className="btn btn-primary"
                onClick={() => {
                    {/*setCounter(counter + 1);*/ }
                  setState({
                      //esto lo añadimos para que no se pierda el valor de counter2
                      //counter2: counter2,
                      
                      ...state,
                      counter1: counter1 +1,
                      counter2: counter2 -1,
                      counter3: counter3 *2
            
                      
                  })
                }}>
                +1
            </button>
        </>
    )
};

export default CounterApp;