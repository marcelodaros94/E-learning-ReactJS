import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home'
import NavBar from '../../components/NavBar/NavBar'

export default function AppRouter(){
    return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <NavBar/>
        <Routes>
            <Route exact path="/home" element={ <Home/>} />
        </Routes>
    </BrowserRouter>
    )
}