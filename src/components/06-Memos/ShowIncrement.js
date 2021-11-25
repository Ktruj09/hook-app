import React, {memo} from "react";


const ShowIncrement = memo(({increment}) =>{

    console.log('Me volvi a cargar')
    return (
        <>
        <button
                className="btn btn-info"
                onClick={() =>{increment();}}
            >
                Incrementar
            </button>
        </>
    )
});

export default ShowIncrement;