import React, { useState, useEffect } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai';
export default function Details({ details }){
    if (details === undefined) {
        return <h2>Loading...</h2>;
    }
    return (
        <>
            {
                details.map(detail => 
                    <div><AiFillPlayCircle/> { detail.name }</div>    
                )
            }
        </>
    )
}