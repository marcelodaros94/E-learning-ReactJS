import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Video from '../../components/Video/Video'
import Details from '../../components/Details/Details'
import CoursesService from '../../services/courses'

export default function Course(){
    const [course, setCourse] = useState([])
    const [current, setCurrent] = useState([])
    
    const { id }=useParams()
    
    async function getCourse(id){            
        let json = await CoursesService.getCourse(id)
        setCourse(json)
        setCurrent(json.sessions[0])
    }

    useEffect(() => {
        getCourse(id)
    }, [])

    return(
        <section>
            <div className='container'>
                <div className='row'>
                  {localStorage.getItem('auth_token') !== null ? 
                    <div class="col-md-6">
                        <h1>{ course.name }</h1>
                        <hr></hr>
                        <h2>Introducción</h2>
                        <Video data={ current } />
                    </div> :
                    <div class="col-md-6">
                        <p>Inicia sesión para acceder el contenido</p>
                    </div> }
                    <div className="col-md-6">
                         <Details details={ course.sessions }  currentChanger={setCurrent} />
                    </div> 
                </div>
            </div>    
        </section>
    )
} 