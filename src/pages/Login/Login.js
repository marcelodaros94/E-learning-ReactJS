import React, { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Login(){
    const navigate = useNavigate()
    async function handleSubmit(event) {        

        event.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": event.currentTarget.elements.loginEmail.value,
            "password": event.currentTarget.elements.loginPassword.value
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        let response = await fetch("http://127.0.0.1:8000/api/auth/login", requestOptions);
        let json = await response.json();
        
        if(json.access_token !== undefined){
            localStorage.setItem('auth_token',json.access_token);
            navigate('/');
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Datos incorrectos',
            })
        }
        
    }

    return (
        <section id="login">
            <div className="container">
                <form onSubmit={handleSubmit}>
                {/* Email input */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="loginEmail">Email</label>
                    <input type="email" id="loginEmail" className="form-control" />
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="loginPassword">Password</label>
                    <input type="password" id="loginPassword" className="form-control" />
                </div>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-block mb-4">Login</button>
                {/* Register buttons */}
                <div className="text-center">
                    <p>¿No tienes una cuenta? <Link to={`/register`}>Regístrate</Link></p>
                </div>
                </form>
            </div>
        </section>
    );
}