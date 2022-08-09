import axios from "axios";
import api from './api';

const updateProgress = async (id) => {

    var requestOptions = {
        method: 'PUT',
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

    api(requestOptions)
}

const videoService = {
    updateProgress
}

export default videoService