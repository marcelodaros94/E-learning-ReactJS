const getCourses = async () => {
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    let response = await fetch(process.env.REACT_APP_API+"/api/course", requestOptions);
    return response.json();
}

const coursesService = {
    getCourses
}

export default coursesService