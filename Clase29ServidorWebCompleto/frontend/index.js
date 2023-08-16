fetch('http://localhost:8080/api/business')
    .then(response => response.json())
    .then(data => console.log(data));