import React, { useState } from 'react';
import '../02-useEffect/simpleform.css'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'

const RealExampleRef = () => {


    const [show, setShow] = useState(false);


    return (
        <>
            <h2>RealExampleRef</h2>

            { show && < MultipleCustomHooks /> }

            <button
            className='btn btn-primary mt-5'
            onClick={()=>{setShow(!show)}}>
                Show/Hide
            </button>



        </>
    )
}

export default RealExampleRef;