import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import './Course.css';
import {Link} from 'react-router-dom'
export default function Course({ data }){
    
    return (
        <div className="course">
            <img src={process.env.PUBLIC_URL+'/assets/img/courses/'+data.img}/>
            <h3>{data.name}</h3>
            <p>{data.description}</p>
            <Link className="btn btn-outline-success btn-lg" to={`/course/1`}>Comprar</Link>
        </div>

    )
}