import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [state, setstate] = useState({ data: null, loading: true, error: null })

    //lo que hacemos acá, es que cuando se le de click en el boton, nos mostará el mensaje de 
    //loading 
  
    useEffect(() => {
        setstate({data: null, loading: true, error: null})
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setstate({
                    loading: false,
                    error: null,
                    data: data
                })
            })


    }, [url])
    return state;
}

export default useFetch;