import React, { useState, useEffect } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import CircularProgress from '../../components/CircularProgress/CircularProgress'
import {Link} from 'react-router-dom'
import AuthService from '../../services/auth'

export default function Dashboard() {
    const [loader, setLoader] = useState(true)
    const [courses, setCourses] = useState([])
    
    async function getCourses(){            
        let json = await AuthService.mycourses()
        setCourses(json)
        //Ocultar loader
        setLoader(false)
    }

    useEffect(() => {
        getCourses()
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
                                            <ProgressBar now={course.porcentaje} label={`${course.porcentaje}%`} />
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