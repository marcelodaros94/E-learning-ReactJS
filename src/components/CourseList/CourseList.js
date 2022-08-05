import React, { useState, useEffect } from 'react'
import Course from '../Course/Course'
import CircularProgress from '../CircularProgress/CircularProgress'
import CoursesService from '../../services/courses'
export default function CourseList(){  
    const [loader, setLoader] = useState(true)
    const [courses, setCourses] = useState([])
    
    async function getCourses(){            
        let json = await CoursesService.getCourses()
        setCourses(json)
        //Ocultar loader
        setLoader(false)
    }

    useEffect(() => {
        getCourses()
    }, [])

    return(
        <>
        <section>
            <div className="container">
                <h2>Cursos Destacados</h2>
                <hr/>
                <div className="section__cont row">
                    {
                        loader
                        ?
                        <CircularProgress />
                        :
                        <>
                            {courses.map(course => {
                                return (
                                    <div className="section__cont__item col-md-4 col-sm-12">
                                        <div key={course.id}>
                                            <Course data={course} />
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    }
                </div>
            </div>
        </section>
        </>
    )
}