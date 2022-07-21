import React, { useState, useEffect } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai';
import './Details.css'

export default function Details({ details, currentChanger }){
    if (details === undefined) {
        return <h2>Loading...</h2>;
    }
    return (
        <>
            {
                details.map(detail => 
                    <div className="detail-cont" onClick={() => currentChanger(detail)}><AiFillPlayCircle/><b>{ detail.name }</b>. { detail.description }</div>    
                )
            }
        </>
    )
}