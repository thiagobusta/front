
//fetch
const section = document.querySelector('.lista');

const endpoint = 'https://apis.datos.gob.ar/georef/api/v2.0/provincias';

fetch(endpoint)
  .then(function (response) {
    // console.log(response);
    return response.json();

  })
  .then(function (data) {
    console.log(data);
    const resultados = data.provincias;
    console.log(resultados);

    for (let i = 0; i < resultados.length; i++) {
      section.innerHTML += `
       <li>
          <a href="detalle.html?id=${resultados[i].id}">
            ${resultados[i].nombre}
          </a>
        </li>

      `;
    }
  })
  .catch(function (error) {
    console.log('Error en la comunicación:', error);
  });
