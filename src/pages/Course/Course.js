import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CourseContent from '../../components/CourseContent/CourseContent'
import { useDispatch } from "react-redux";
import { fetchSingleCourse } from '../../actions/Course';

export default function Course(){
    
    const { id }=useParams()

    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(fetchSingleCourse(id))     
    }, [dispatch])

    return(
        <CourseContent />
    )
} 