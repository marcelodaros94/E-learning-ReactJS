import React from 'react'
import Course from '../Course/Course'
import { useSelector } from "react-redux";
import CircularProgress from '../CircularProgress/CircularProgress';

export default function CourseList(){  
    
    const { courses, loader, error } = useSelector(
        (state) => state.courses
    );
    if (loader) return <CircularProgress />;
    if (error) return <h3>{error}</h3>;

    return(
        <>
        <section>
            <div className="container">
                <h2>Cursos Destacados</h2>
                <hr/>
                <div className="section__cont row">
                    {courses.map(course => {
                        return (
                            <div className="section__cont__item col-md-4 col-sm-12">
                                <div key={course.id}>
                                    <Course data={course} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        </>
    )
}