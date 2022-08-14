import React, { useState } from 'react'
import Video from '../../components/Video/Video'
import Details from '../../components/Details/Details'
import { useDispatch, useSelector } from "react-redux";
import { updateSessions } from '../../features/coursesSlice';
import CircularProgress from '../../components/CircularProgress/CircularProgress'

export default function Course(){

    const dispatch = useDispatch(); 
    
    const { currentCourse, loader, error } = useSelector(
        (state) => state.courses
    );

    const [currentVideo, setCurrentVideo] = useState(currentCourse.sessions[0])

    if (loader) return <CircularProgress />;
    if (error) return <h3>{error}</h3>;    
    
    function updateProgress(){  
        currentCourse.sessions.map((video,index) => {
            if(video.id === currentVideo.id){
                dispatch(updateSessions(index))//percentage of each video
                if(currentCourse.sessions[index+1])
                    setCurrentVideo(currentCourse.sessions[index+1])
            }
        })
    }

    return(
        <section>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-6">
                        <Video data={ currentVideo } progressChanger={updateProgress}/>
                    </div> 
                    <div className="col-md-6">
                         <Details currentChanger={setCurrentVideo}/>
                    </div> 
                </div>
            </div>    
        </section>
    )
} 