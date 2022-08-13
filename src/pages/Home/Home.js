import React, { useEffect } from 'react'
import CourseList from '../../components/CourseList/CourseList'
import { useDispatch } from "react-redux";
import { fetchAll } from '../../actions/Course';

export default function Home(){

    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(fetchAll())
    }, [])

    return (
        <CourseList />
    )
}
