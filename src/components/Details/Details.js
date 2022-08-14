import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai';
import CircularProgress from '../CircularProgress/CircularProgress';
import './Details.css'
import { useSelector } from "react-redux";

export default function Details({ currentChanger }){

    const { currentCourse, loader, error } = useSelector(
        (state) => state.courses
    );
    if (loader) return <CircularProgress />;
    if (error) return <h3>{error}</h3>;

    return (
        <>
        { currentCourse ? (
            currentCourse.sessions.map(detail => 
                <div className={'detail-cont' + (detail.porcentaje==100 ? ' detail-complete' : ' ') } onClick={() => currentChanger(detail)}><AiFillPlayCircle/><b>{ detail.name }</b>. { detail.description }</div>    
            )
        ) : <h3>No hay videos</h3>
        }
        </>
    )
}