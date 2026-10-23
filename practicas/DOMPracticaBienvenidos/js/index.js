alert("Bienvenidos a mi sitio.");

let respuesta = confirm("¿Está seguro de querer avanzar?");

if (respuesta) {
    document.querySelector(".saludo").textContent = "Qué alegría que quieras continuar tu visita!";
} else {
    document.querySelector(".saludo").textContent = "Lamentamos que no quieras continuar tu visita...";
}

let nombre = prompt("¿Cómo te llamás?");

document.querySelector("h1").textContent = "Bienvenido " + nombre;

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