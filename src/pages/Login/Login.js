import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

export default function Login(){
    return (
        <section id="login">
            <div className="container">
                <form>
                {/* Email input */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="loginName">Email</label>
                    <input type="email" id="loginName" className="form-control" />
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