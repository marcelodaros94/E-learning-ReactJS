const login = async (request) => {

    var raw = JSON.stringify(request);
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    let response = await fetch(process.env.REACT_APP_API+"/api/auth/login", requestOptions);
    return response.json();
}

const logout = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer "+localStorage.getItem("auth_token"));

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: {},
        redirect: 'follow'
    };

    let response = await fetch(process.env.REACT_APP_API+"/api/auth/logout", requestOptions);
    return response.json();
}

const authService = {
    login,
    logout
}

export default authService