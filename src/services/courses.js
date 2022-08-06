const getCourses = async () => {
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");   
    myHeaders.append("accept","application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    let response = await fetch(process.env.REACT_APP_API+"/api/course", requestOptions);
    return response.json();
}

const getCourse = async (id) => {
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");    
    myHeaders.append("accept","application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    let response = await fetch(process.env.REACT_APP_API+"/api/course/"+id, requestOptions);
    return response.json();
}

const coursesService = {
    getCourse,
    getCourses
}

export default coursesService