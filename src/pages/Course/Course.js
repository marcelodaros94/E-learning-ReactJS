import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Video from '../../components/Video/Video'
import Details from '../../components/Details/Details'
import CoursesService from '../../services/courses'
import Swal from 'sweetalert2'

export default function Course(){
    const [course, setCourse] = useState([])
    const [current, setCurrent] = useState([])
    
    const { id }=useParams()
    
    async function getCourse(id){            
        let json = await CoursesService.getCourse(id)
        setCourse(json)
        setCurrent(json.sessions[0])
    }

    function updateProgress(complete_video){   
        let new_sessions = course.sessions.map((video,index) => {
            if(video.id === complete_video.id){
                setCurrent(course.sessions[index+1])
                return complete_video
            }else{
                return video
            }
        })
        setCourse({
            ...course,
            sessions: new_sessions
        })
    }

    async function handlePurchase(){            
        let json = await CoursesService.takeCourse(id)
        Swal.fire({
            text: json.message,
        })
        
    }

    useEffect(() => {
        getCourse(id)
    }, [])

    return(
        <section>
            <div className='container'>
                <div className='row'>
                    { localStorage.getItem('auth_token') !== null ? (
                        course.taken ?
                            <div className="col-md-6">
                                <h1>{ course.name }</h1>
                                <hr></hr>
                                <Video data={ current } progressChanger={updateProgress}/>
                            </div> 
                        :
                            <div className="col-md-6">
                                <a href='javascript:void(0)' onClick={handlePurchase} className='btn btn-success'>
                                    Comprar
                                </a>
                            </div> 
                        )
                    :
                        <div class="col-md-6">
                            <p>Inicia sesión para acceder el contenido</p>
                        </div> 
                    }
                    <div className="col-md-6">
                         <Details details={ course.sessions }  currentChanger={setCurrent}/>
                    </div> 
                </div>
            </div>    
        </section>
    )
} 