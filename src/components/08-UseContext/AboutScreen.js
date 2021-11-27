import React, { useContext } from "react";
import { UserContext } from "./UseContext";
export const AboutScreen = () => {

    //extraemos user y setUser
    const { user, setUser } = useContext(UserContext)

    //función para setear nuestro user 
    const handleLoguot = () => {
        setUser({})
    }

    return (
        <>
            <div className="container">
                <h1>AboutScreen</h1>

                <pre>
                    {/**Imprime información  */}
                    {JSON.stringify(user, null, 3)}
                </pre>
                <button
                    className="btn btn-warning"
                    onClick={handleLoguot}
                >
                    Logout
                </button>

            </div>

        </>
    )

}

