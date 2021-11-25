import React, { memo } from "react";

const Small = memo(({ value }) => {
    //si usaríamos peticiones http, se concimiría más el plan de datos, del usuario
    //se cargaría más la aplicación, es por ello que se usa el método memo
    //solo se va a cambiar si las propiedades cambian
    console.log('Me volví a llamar')
    return (
        <>
            <small>{value}</small>
        </>
    )
})

export default Small;