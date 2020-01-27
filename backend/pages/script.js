const andar1 = document.querySelector('#floor1')

let response = fetch('http://0.0.0.0:3333/floors/1',{ method: 'GET'});

response.then(res =>{
    res.text()
}).then(text =>{
    console.log(text)
})