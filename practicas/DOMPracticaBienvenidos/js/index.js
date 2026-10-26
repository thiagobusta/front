alert("Bienvenidos a mi sitio.");

let respuesta = confirm("¿Está seguro de querer avanzar?");

if (respuesta) {
    document.querySelector(".saludo").textContent = "Qué alegría que quieras continuar tu visita!";
} else {
    document.querySelector(".saludo").textContent = "Lamentamos que no quieras continuar tu visita...";
}

let nombre = prompt("¿Cómo te llamás?");

document.querySelector("h1").innerText = "Bienvenido " + nombre;

let edad = prompt("¿Cuántos años tenés?");

if (edad < 18) {
    document.querySelector(".container-general").style.display = "none";
    document.querySelector("#accesoDenegado").style.display = "block";
}
else {
    let programacion = confirm("¿Te gusta la programación?");

    if (programacion) {
        document.querySelector(".background-img").innerHTML = '<img src="./img/programmer.jpeg">';
    }
    else {
        document.querySelector(".background-img").innerHTML = '<img src="./img/gatito.jpeg">';
    }
}

let avatar = document.querySelector(".avatar")

avatar.src = "./img/fotodeperfil.jpg"

let nombrepelicula = prompt("¿Cuál es el nombre de tu película favorita?");
let directorpelicula = prompt("¿Cuál es el director/a de tu película favorita?");
let duracionpelicula = prompt("¿Cuál es la duración de tu película favorita?");
let actorpelicula = prompt("¿Cuál es el actor de tu película favorita?");

let pelicula = {
    nombre: nombrepelicula,
    director: directorpelicula,
    duracion: Number(duracionpelicula),
    actor: actorpelicula
};

document.querySelector("#nombre").innerText = pelicula.nombre;
document.querySelector("#director").innerText = pelicula.director;
document.querySelector("#duracion").innerText = pelicula.duracion;
document.querySelector("#actor").innerText = pelicula.actor;

document.querySelector(".contenido-bloqueado").style.display = "block";
