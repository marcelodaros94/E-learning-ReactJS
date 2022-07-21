import React from 'react';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/Home/Home'
import Course from '../../pages/Course/Course.js'
import NavBar from '../../components/NavBar/NavBar'

export default function AppRouter(){
    return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <NavBar/>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/course/:id" element={<Course/>} />
        </Routes>
    </BrowserRouter>
    )
}