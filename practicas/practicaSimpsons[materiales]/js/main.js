// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector("#titulo");
    let saludo = document.querySelector("#saludo");
    let span = document.querySelector(".bienvenida span");
    let bienvenida = document.querySelector(".bienvenida");
    let personajes = document.querySelector(".personajes");

    titulo.addEventListener("mouseover", function() {
        let nombre = prompt("Como es tu nombre?");
 
        if (nombre === "") {
            saludo.textContent = "Bienvenid@";
        } else {
            saludo.textContent = "Bienvenid@" + nombre;
        }

        saludo.style.textTransform = "uppercase";

        titulo.style.display = "none";
        span.style.display = "block";
    });

    span.addEventListener("click", function() {
        bienvenida.style.display = "none";
        personajes.style.display = "flex";
    });
 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    let bart = document.querySelector("#bart");
    let lisa = document.querySelector("#lisa");
    let homero = document.querySelector("#homero");
    let marge = document.querySelector("#marge");
    let maggie = document.querySelector("#maggie");
    let milhouse = document.querySelector("#milhouse");
    let burns = document.querySelector("#burns");
    let bobPatinio = document.querySelector("#bobPatinio");
    let flanders = document.querySelector("#flanders");
    let duffman = document.querySelector("#duffman");
    let gorgory = document.querySelector("#gorgory");
    let nelson = document.querySelector("#nelson");

    bart.addEventListener("click", function() {
        alert("¡Hola, Bart!");
        if (bart.classList.contains("personaje-seleccionado")) {
            bart.classList.remove("personaje-seleccionado");
        } else {
            bart.classList.add("personaje-seleccionado");
        }
    });

    lisa.addEventListener("dblclick", function() {
        alert("¡Hola, Lisa!");
        if (lisa.classList.contains("personaje-seleccionado")) {
            lisa.classList.remove("personaje-seleccionado");
        } else {
            lisa.classList.add("personaje-seleccionado");
        }
    });

    homero.addEventListener("click", function() {
        alert("¡Hola, Homero!");
        if (homero.classList.contains("personaje-seleccionado")) {
            homero.classList.remove("personaje-seleccionado");
        } else {
            homero.classList.add("personaje-seleccionado");
        }
    });

    marge.addEventListener("mouseenter", function() {
        alert("¡Hola, Marge!");
        if (marge.classList.contains("personaje-seleccionado")) {
            marge.classList.remove("personaje-seleccionado");
        } else {
            marge.classList.add("personaje-seleccionado");
        }
    });

    maggie.addEventListener("mouseleave", function() {
        alert("¡Hola, Maggie!");
        if (maggie.classList.contains("personaje-seleccionado")) {
            maggie.classList.remove("personaje-seleccionado");
        } else {
            maggie.classList.add("personaje-seleccionado");
        }
    });

    milhouse.addEventListener("click", function() {
        alert("¡Hola, Milhouse!");
        if (milhouse.classList.contains("personaje-seleccionado")) {
            milhouse.classList.remove("personaje-seleccionado");
        } else {
            milhouse.classList.add("personaje-seleccionado");
        }
    });

    burns.addEventListener("mouseenter", function() {
        alert("¡Hola, Burns!");
        if (burns.classList.contains("personaje-seleccionado")) {
            burns.classList.remove("personaje-seleccionado");
        } else {
            burns.classList.add("personaje-seleccionado");
        }
    });

    bobPatinio.addEventListener("dblclick", function() {
        alert("¡Hola, Bob Patiño!");
        if (bobPatinio.classList.contains("personaje-seleccionado")) {
            bobPatinio.classList.remove("personaje-seleccionado");
        } else {
            bobPatinio.classList.add("personaje-seleccionado");
        }
    });

    flanders.addEventListener("mouseenter", function() {
        alert("¡Hola, Flanders!");
        if (flanders.classList.contains("personaje-seleccionado")) {
            flanders.classList.remove("personaje-seleccionado");
        } else {
            flanders.classList.add("personaje-seleccionado");
        }
    });

    duffman.addEventListener("dblclick", function() {
        alert("¡Hola, Duffman!");
        if (duffman.classList.contains("personaje-seleccionado")) {
            duffman.classList.remove("personaje-seleccionado");
        } else {
            duffman.classList.add("personaje-seleccionado");
        }
    });

    gorgory.addEventListener("mouseenter", function() {
        alert("¡Hola, Gorgory!");
        if (gorgory.classList.contains("personaje-seleccionado")) {
            gorgory.classList.remove("personaje-seleccionado");
        } else {
            gorgory.classList.add("personaje-seleccionado");
        }
    });

    nelson.addEventListener("click", function() {
        alert("¡Hola, Nelson!");
        if (nelson.classList.contains("personaje-seleccionado")) {
            nelson.classList.remove("personaje-seleccionado");
        } else {
            nelson.classList.add("personaje-seleccionado");
        }
    });

    /* Asignarle evento a la variable boton */
    let boton = document.querySelector(".boton");
    let nombres = document.querySelectorAll(".personajes p");

    boton.addEventListener("click", function() {
        nombres.forEach(function(nombre) {
            console.log(nombre.textContent);
        });
    });
 
 
 });