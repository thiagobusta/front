function rectangulo(height, width){
    let area = height * width
    return area
}

console.log(rectangulo(10, 8))

function dolarhoy(ars){
    let cambio = ars * 1550
    return cambio
}

console.log(dolarhoy(100))

function iva(preciooriginal){
    let preciofinal = preciooriginal * 1.21
    return preciofinal
}

console.log(iva(100))

function mitad(valor){
    return (valor / 2)
}

console.log(mitad(60))


function siguiente(numero) {
  return numero + 1;
}
console.log(siguiente(20))

function doble(numero) {
  return 2 * numero;
}
console.log(doble(20))

function siguienteDelDoble(numero) {
   return siguiente(doble(numero));
}
console.log(siguienteDelDoble(20))
