import React, { useState, useEffect } from 'react'
import Course from '../Course/Course'
import CircularProgress from '../CircularProgress/CircularProgress'
export default function CourseList(){  
    const [loader, setLoader] = useState(true)
    const [courses, setCourses] = useState([])
    const dataCourses=[/*
        {
            id: 1,
            name: 'La influencia de la lucha mexicana',
            description: 'Todo sobre uno de los estilos más populares, que va más allá de acrobacias elevadas y una tradición de máscaras',
            price: 25.00,
            img: 'tiger_pegasus.jpg'
        },*/
        {
            id: 2,
            name: 'Psicología del Pro Wrestling',
            description: 'Siendo la lucha libre una narrativa más que una simple secuencia, llegamos a algo llamado la suspensión de la incredulidad',
            price: 25.00,
            img: 'rock_mankind.webp'
        }/*,
        {
            id: 3,
            name: 'Puroresu y la cultura japonesa',
            description: 'La brutalidad del entretenimiento deportivo y altas calificaciones, termina por definir el Strong Style nipón',
            price: 20.00,
            img: 'naito.jpg'
        },
        {
            id: 4,
            name: 'Historia del Wrestling',
            description: 'Un viaje a través de las contiendas que marcaron un antes y un después en la lucha profesional americana',
            price: 20.00,
            img: 'hart.jpg'
        }*/
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