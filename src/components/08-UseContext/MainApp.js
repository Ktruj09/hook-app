import React, {useState} from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from './UseContext'
const MainApp = () => {

const [user, setUser] = useState({})


  return (
   
    <>
    {/**un context.provider nos va a servir para proveer información 
     * a lo largo de todos sus componentes hijos, es todo lo que esta 
     * dentro del router y sus rutas
    */}

    
      <UserContext.Provider value={{user, setUser}}>

        <AppRouter />

      </UserContext.Provider>


    </>


  )

};

export default MainApp;

