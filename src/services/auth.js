import axios from "axios";

const register = async (request) => {
        
    var raw = JSON.stringify(request);

    var requestOptions = {
        method: 'POST',
        url: process.env.REACT_APP_API+"/api/auth/register",
        headers: {
            "Content-Type": "application/json",   
            "accept": "application/json"
        },
        data: raw,
        redirect: 'follow'
    };

    return axios(requestOptions)
    .then((response) => {
        return response.data;
    })
}

const login = async (request) => {

    var raw = JSON.stringify(request);

    var requestOptions = {
        method: 'POST',
        url: process.env.REACT_APP_API+"/api/auth/login",
        headers: {
            "Content-Type": "application/json",   
            "accept": "application/json"
        },
        data: raw,
        redirect: 'follow'
    };

    return axios(requestOptions)
    .then((response) => {
        return response.data;
    })
}

const logout = async () => {

    var requestOptions = {
        method: 'POST',
        url: process.env.REACT_APP_API+"/api/auth/logout",
        headers: {
            "Content-Type": "application/json",   
            "accept": "application/json",
            "Authorization": "Bearer "+localStorage.getItem("auth_token")
        },
        data: {},
        redirect: 'follow'
    };

    return axios(requestOptions)
    .then((response) => {
        return response.data;
    })
}

const mycourses = async () => {
    
    var requestOptions = {
        method: 'POST',
        url: process.env.REACT_APP_API+"/api/auth/me",
        headers: {
            "Content-Type": "application/json",   
            "accept": "application/json",
            "Authorization": "Bearer "+localStorage.getItem("auth_token")
        },
        data: {},
        redirect: 'follow'
    };

    return axios(requestOptions)
    .then((response) => {
        return response.data;
    })
}

const authService = {
    login,
    logout,
    register,
    mycourses
}

export default authService