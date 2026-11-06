let resultados = document.querySelector(".search-results");

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("q");


fetch("https://rickandmortyapi.com/api/character/?name=" + busqueda)
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(datos) {
        for (let i = 0; i < datos.results.length; i++) {
            resultados.innerHTML += `
                <article>
                    <img src="${datos.results[i].image}" alt="">
                    <a href="detalle.html?id=${datos.results[i].id}">
                        <p>Name: ${datos.results[i].name}</p>
                    </a>
                    <p>Status: ${datos.results[i].status}</p>
                </article>
            `;
        }
    });