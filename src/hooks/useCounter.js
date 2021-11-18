import { useState } from "react"

export const useCounter = (initialState =0) =>{

    //creamos un estado 
    const [state, setState] =useState(initialState);

    //creación de dos funciones
    //incremente
    const increment= () =>{
        setState(state +1);
    }

    const decrement= () =>{

        if(state <= 0){
            message();
        }else{
            setState(state -1)
        }
        
    }

    const reset = () =>{

        if(state <= 0){
            message();
        }else{
            setState(initialState)
        }
       
    }

    const message = () =>{
        alert('Lo sentimos, ya no puedes seguir restanto al contador. ');
    }
    
    return {
        state,
        increment,
        decrement,
        message, 
        reset
    };
}