import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
import { ErrorFound } from './ErrorFound'

export const AppRouter = () => {

    return (

        <Router>

            <div >
                <NavBar />
                {/**<Routes></Routes> Nos ayuda a mostrar rutas */}
                <Routes>
                    <Route exact path="/" element={<HomeScreen />} />
                    <Route exact path="/about" element={<AboutScreen />} />
                    <Route exact path="/login" element={<LoginScreen />} />
                    <Route element={<ErrorFound />} />
                </Routes>

            </div>

        </Router>
    )

};

