import React, { useEffect, useState } from 'react';
//ejercicio que al momento de colocar Kevin muestra las coordenadas del mouse
const Message = () => {
  //en este apartado servirá para extraerlo y mostrarlo en el html
  const [coords, setCoords] = useState({ x:0, y:0 })

  //extraemos
 const {x, y}  =coords;
    useEffect(() => {

      

        //aca viene el cuerpo del efecto
        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            setCoords(coords)
           
        }

        //mostrar coordenadas del mouse
        window.addEventListener('mousemove', mouseMove)


        return () => {
            //fase de limpieza 
            window.removeEventListener('mousemove', mouseMove)
        }

        //acá ira alguna dependencia
    }, [])


    return (

        <>
            <h3>Eres genial!</h3>
           <p>
               x: { x } y: {y}
           </p>

        </>
    )


};


export default Message;