let lista = document.querySelector(".CharacterList")
let endpoint = "https://rickandmortyapi.com/api/character"

fetch(endpoint) 
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log(data)
        i = 0
        console.log(data.results[i]) 
        let resultado = data.results
        for (let i = 0; i < resultado.length; i++) {
            lista.innerHTML += `
                <article>
                    <img src = ${resultado[i].image} alt="imagen">
                    <p> Name: ${resultado[i].name}</p>
                    <p>Status: ${resultado[i].status}</p>
                </article>
            `
        }
    })
    .catch(function(e) {
        console.log("Error: " + e)
    })