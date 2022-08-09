import axios from "axios";
import api from "./api";

const getCourses = () => {    

    return axios.get(process.env.REACT_APP_API+"/api/course")
    .then((response) => {
        return response.data;
    })

}

const getCourse = (id) => {

    let auth=localStorage.getItem("auth_token") ? 'auth/' : ''

    var requestOptions = {
        method: 'GET',
        url: process.env.REACT_APP_API+"/api/"+auth+"course/"+id,
        headers: {
            "Content-Type": "application/json",   
            "accept": "application/json",
            "Authorization": "Bearer "+localStorage.getItem("auth_token")
        },
        redirect: 'follow'
    };
    
    return api(requestOptions)
    .then((response) => {
        return response.data;
    })
    
}

const takeCourse = (id) => {

    var requestOptions = {
        method: 'POST',
        url: process.env.REACT_APP_API+"/api/auth/progress",
        headers: {
            "Content-Type": "application/json",   
            "accept": "application/json",
            "Authorization": "Bearer "+localStorage.getItem("auth_token")
        },
        data: {
            id: id
        },
        redirect: 'follow'
    };
    
    return api(requestOptions)
    .then((response) => {
        return response.data;
    })
    
}

const coursesService = {
    getCourse,
    getCourses,
    takeCourse
}

export default coursesService