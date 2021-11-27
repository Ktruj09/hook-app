import React, {useContext} from "react";
import {UserContext} from './UseContext'

export const HomeScreen = () =>{

const {user} = useContext(UserContext);

console.log(user);



    return(
        <>
            <h1>HomeScreen</h1>
            <pre className="container">
                {JSON.stringify(user, null, 3)}
            </pre>
           
        </>
    )

};

