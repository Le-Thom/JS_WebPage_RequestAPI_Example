setInterval(() => {
    fetch('http://localhost:3000/random', {method: "GET"})
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            document.getElementById('rnd_nb').innerText = data.result;
            document.getElementById('rnd').classList.remove("hide")
            document.getElementById('err').classList.remove("show")
            document.getElementById('err_msg').innerText = "";
        })
        .catch(err => {
            // In case of error, hide the random number and show the error message
            document.getElementById('rnd').classList.add("hide")
            document.getElementById('err').classList.add("show")
            document.getElementById('err_msg').innerText = err;
            console.error('Error:', err);
        });
}, 1000);