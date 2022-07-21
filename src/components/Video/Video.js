import React, { useState, useEffect } from 'react'
export default function Video({ data }){    
    console.log(data);
    return (
        <>
            <div class="videoWrapper">
                <video controls width="560" height="349" class="embed-responsive-item" src={process.env.PUBLIC_URL+'/assets/videos/'+data.video} />
            </div>
        </>
    )
}