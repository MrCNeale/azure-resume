window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl = 'https://azureresumechrisn.azurewebsites.net/api/GetResumeCounter?code=rXacnMJK4VbB1euZiw3pj4mG6BZG30CGMARbO3uQlK6uAzFuQ3yTvA%3D%3D';
const localFunctionApiurl = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
            return response.json();
        }).then(response => {
            console.log("Website called function API.")
            count = response.count;
            document.getElementById("counter").innerText = count;
        }).catch(function(error){
            console.log(error);
        });
    return count;
}