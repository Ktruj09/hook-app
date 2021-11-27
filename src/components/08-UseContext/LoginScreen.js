import React,{useContext} from "react";
import {UserContext} from './UseContext'


export const LoginScreen = () =>{

    //1. Obtener la referenica al context userContext
    const {setUser}= useContext(UserContext)
    
  
    //2. Extraer setUser
    return(
        <>
        <div className="container">

        <h1>Login</h1>
            <button 
            className="btn btn-primary"
            onClick={( )=> setUser({
                id:1234,
                name: 'Kevin'
            })}
            >
                Login
            </button>
        </div>
           
        </>
    )
};
