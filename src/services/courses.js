import axios from "axios";

const getCourses = () => {    

    return axios.get(process.env.REACT_APP_API+"/api/course")
    .then((response) => {
        return response.data;
    })

}

const getCourse = (id) => {

    return axios.get(process.env.REACT_APP_API+"/api/course/"+id)
    .then((response) => {
        return response.data;
    })
    
}

const coursesService = {
    getCourse,
    getCourses
}

export default coursesService