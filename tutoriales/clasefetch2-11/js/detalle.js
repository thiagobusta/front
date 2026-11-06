let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let id = queryStringObj.get("id");

const endpoint = 'https://rickandmortyapi.com/api/character/' + id

fetch(endpoint)
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(datos) {
        console.log(datos);
        let nombre = document.querySelector("#nombre");
        let status = document.querySelector("#status");
        let species = document.querySelector("#species");
        let image = document.querySelector("#image")
        nombre.innerText = datos.name;
        status.innerText = "Status: " + datos.status; 
        species.innerText = "Especie: " + datos.species;
        image.src = datos.image;

    })
    .catch(function(error) {
    console.log('Error en la comunicación:', error);
    });