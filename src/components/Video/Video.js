import React, { useState, useEffect } from 'react'
import VideoService from '../../services/video'

export default function Video({ data, progressChanger }){  

    const handleSrcChange = (event) => {
        event.target.addEventListener("ended", () => handleCompleteVideo(event));
    }

    const handleCompleteVideo = (event) => {
        let json = VideoService.updateProgress(event.target.id)
        data.porcentaje=100
        progressChanger(data)//update in State
    }

    useEffect(() => {
        document.querySelector("video").play()
    }, [data])

    return (
        <>
            <div className="videoWrapper">
                <video onLoadedMetadata={handleSrcChange} id={data.id} controls width="550" height="349" class="embed-responsive-item" src={process.env.PUBLIC_URL+'/assets/videos/'+data.video} />
            </div>
        </>
    )
}