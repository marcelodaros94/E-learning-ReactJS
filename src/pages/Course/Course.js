import React, { useState, useEffect } from 'react'
import Video from '../../components/Video/Video'
import Details from '../../components/Details/Details'

export default function Course(){
    const [course, setCourse] = useState([])
    const [current, setCurrent] = useState([])
    const dataCourse=
    {
        id: 2,
        name: 'Psicología del Wrestling',
        description: 'Siendo la lucha libre una narrativa más que una simple secuencia, llegamos a algo llamado la suspensión de la incredulidad',
        price: 25.00,
        img: 'rock_mankind.webp',
        sessions: [
            {
                id: 11,
                name: 'Introducción al curso',
                description: 'Presentación de los temas a tratar a lo largo del curso',
                video: 'intro.mp4'
            },
            {
                id: 12,
                name: 'Generación de emociones',
                description: 'El nivel de desarrollo del personaje permite la conexión con el público',
                video: 'emociones.mp4'
            }
        ]        
    }
    
    const getCourse= new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataCourse)
        }, 2000)
    })

    useEffect(() => {
        getCourse.then((data) => {
            console.log("respuesta de promesa:", data)
            setCourse(data)
            setCurrent(data.sessions[0])
        })
    }, [])

    return(
        <section>
            <div className='container'>
                <div className='row'>
                    <div class="col-md-6">
                        <h1>{ course.name }</h1>
                        <hr></hr>
                        <h2>Introducción</h2>
                        <Video data={ current } />
                    </div> 
                    <div className="col-md-6">
                         <Details details={ course.sessions }  currentChanger={setCurrent} />
                    </div> 
                </div>
            </div>    
        </section>
    )
} 