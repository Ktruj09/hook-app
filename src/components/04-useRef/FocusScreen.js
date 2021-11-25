import React, { useRef } from 'react';
import '../02-useEffect/simpleform.css';
const FocusScreen = () => {

    const inputRef = useRef();


    const handeClic = () => {
        //Lo que hace esto, es que al dar clic en el boton, nos lleva al  imput 

        //en esta parte, solo selecciona el imput como tal
        //document.querySelector('input').focus();

        //con .select(), selecciona hasta el texto
        // document.querySelector('input').select();

        //optimizado
        inputRef.current.select();
    }


    return (
        <>

            <h2>FocusScreen</h2>

            <input
                ref={inputRef}
                className='form-control'
                placeholder='Su Nombre'

            />


            <button
                className='btn btn-outline-primary mt-5'
                onClick={handeClic}
            >
                Focus
            </button>
        </>
    )
}

export default FocusScreen;