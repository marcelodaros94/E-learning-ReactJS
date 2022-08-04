import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import AuthService from '../../services/auth'

export default function Register(){

    async function handleSubmit(event) {

        event.preventDefault();

        let request = {
            "first_name": event.currentTarget.elements.registerFirstName.value,
            "last_name": event.currentTarget.elements.registerLastName.value,
            "email": event.currentTarget.elements.registerEmail.value,
            "password": event.currentTarget.elements.registerPassword.value
        };
        
        let json = await AuthService.register(request)
        
        Swal.fire({
            text: json.message
        })
        
    }

    return (
        <section id="register">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                    {/* First Name input */}
                    <div className="form-outline col-md-6">
                        <label className="form-label" htmlFor="registerFirstName">Nombre</label>
                        <input type="text" id="registerFirstName" className="form-control" />
                    </div>
                    {/* Last Name input */}
                    <div className="form-outline col-md-6">
                        <label className="form-label" htmlFor="registerLastName">Apellido</label>
                        <input type="text" id="registerLastName" className="form-control" />
                    </div>
                    {/* Email input */}
                    <div className="form-outline col-md-6">
                        <label className="form-label" htmlFor="registerEmail">Email</label>
                        <input type="email" id="registerEmail" className="form-control" />
                    </div>
                    {/* Password input */}
                    <div className="form-outline col-md-6">
                        <label className="form-label" htmlFor="registerPassword">Password</label>
                        <input type="password" id="registerPassword" className="form-control" />
                    </div>
                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">
                        <input className="form-check-input me-2" type="checkbox" defaultValue id="registerCheck" defaultChecked aria-describedby="registerCheckHelpText" />
                        <label className="form-check-label" htmlFor="registerCheck">
                        Acepto los términos y condiciones
                        </label>
                    </div>
                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary btn-block mb-3">Enviar</button>
                    </div>
                </form>
            </div>
        </section>
    );
}