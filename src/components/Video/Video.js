import React, { useState, useEffect } from 'react'
import VideoService from '../../services/video'
import CircularProgress from '../CircularProgress/CircularProgress';
import { useSelector } from "react-redux";
import CoursesService from '../../services/courses'
import Swal from 'sweetalert2'

export default function Video({ data, progressChanger }){  

    useEffect(() => {
        let video = document.querySelector("video")
        if(video)
            video.play()
    }, [data])

    const { currentCourse, loader, error } = useSelector(
        (state) => state.courses
    );
    if (loader) return <CircularProgress />;
    if (error) return <h3>{error}</h3>;

    const handleSrcChange = (event) => {
        event.target.addEventListener("ended", () => handleCompleteVideo(event));
    }

    const handleCompleteVideo = (event) => {
        let json = VideoService.updateProgress(event.target.id)
        progressChanger()//update in State
    }

    async function handlePurchase(){            
        let json = await CoursesService.takeCourse(currentCourse.id)
        Swal.fire({
            text: json.message,
        })
        
    }

    return (
        <>
        <h1>{ data.name }</h1>
        <hr></hr>
        { localStorage.getItem('auth_token') !== null ? (
            <div className="videoWrapper">
            { currentCourse.taken ?
                    <video onLoadedMetadata={handleSrcChange} id={data.id} controls width="550" height="349" class="embed-responsive-item" src={process.env.PUBLIC_URL+'/assets/videos/'+data.video} />                
            :
                <a href='javascript:void(0)' onClick={handlePurchase} className='btn btn-success'>
                    Comprar
                </a>
            }
            </div>
        )
        :
            <h3>Inicie sesión para reproducir</h3>
        }
        </>
    )
}