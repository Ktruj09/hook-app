import { useState, useEffect, useRef } from 'react'

const useFetch = (url) => {

    const isMounted = useRef(true);

    const [state, setstate] = useState({ data: null, loading: true, error: null })


    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])




    //lo que hacemos acá, es que cuando se le de click en el boton, nos mostará el mensaje de 
    //loading 
    useEffect(() => {

        //al agregar el setTimeout, ocasionaremos un error intesionalmente, el cual 
        /**
         * luego de dar click en el boton Show/Hide, que esta en RealExampleRef
         * esperar a que cargue y luego volver a dar clic en el boton show/hiden, nos mostrará el siguiente error
         * 
         * Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
        * Esto será solucionado con useRef
         */
        setTimeout(() => {

            //si esta true, todavía esta montado, podemos mandar de forma segura
            if (isMounted.current) {
                setstate({ data: null, loading: true, error: null })
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        setstate({
                            loading: false,
                            error: null,
                            data: data
                        })
                    })
            } else {
                console.log('SetState no se llamó, se arreglo el problema que teníamos')
            }


        }, 4000)



    }, [url])
    return state;
}

export default useFetch;