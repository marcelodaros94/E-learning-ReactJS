import React from 'react';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/Home/Home'
import Course from '../../pages/Course/Course.js'
import Dashboard from '../../pages/Dashboard/Dashboard.js'
import Login from '../../pages/Login/Login.js'
import Register from '../../pages/Register/Register.js'
import NavBar from '../../components/NavBar/NavBar'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

export default function AppRouter(){

    const user = useSelector(selectUser)

    return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <NavBar/>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/course/:id" element={<Course/>} />
            { user ? 
                <Route path="/dashboard" element={<Dashboard />} />            
            :   <Route path="/login" element={<Login />} />
            }            
            <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
    )
}