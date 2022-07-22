import React, { useState, useEffect } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import CircularProgress from '../../components/CircularProgress/CircularProgress'
import {Link} from 'react-router-dom'

export default function Dashboard() {
    const [loader, setLoader] = useState(true)
    const [courses, setCourses] = useState([])

    const dataCourses=[
        {
            id: 2,
            name: 'Psicología del Pro Wrestling',
            progress: 60
        }
    ]

    const getCourses = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataCourses)
        }, 2000)
    })
    useEffect(() => {
        getCourses.then((data) => {
            console.log("respuesta de promesa:", data)
            setCourses(data)
            //Ocultar loader
            setLoader(false)
        })
    }, [])

    return (          
        <section>
            <div className="container">
                <h2>Mis cursos</h2>
                <hr/>
                <div className="section__cont">
                    <ul>
                    {
                        loader
                        ?
                        <CircularProgress />
                        :
                        <>
                            {courses.map(course => {
                                return (
                                    <li className="row">
                                        <div className="col-md-4 col-sm-12">
                                            {course.name}
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <ProgressBar now={course.progress} label={`${course.progress}%`} />
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <Link className="btn btn-primary disabled" to={`/dashboard`}>Solicitar certificado</Link>
                                        </div>
                                    </li>
                                )
                            })}
                        </>
                    }
                    </ul>
                </div>
            </div>
        </section>      
    );
}