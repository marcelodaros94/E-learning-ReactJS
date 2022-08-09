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

const coursesService = {
    getCourse,
    getCourses
}

export default coursesService