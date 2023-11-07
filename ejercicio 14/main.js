//1. Numero de enlaces
var doc = document.body.innerHTML;
var enlaces = doc.getElementsByTagName("a")
var numeroDeEnlaces = enlaces.length
console.log("Número de enlaces en la página: " + numeroDeEnlaces)

//2. Penultimo Enlace
var penultimoEnlace = enlaces[enlaces.length - 2]
console.log("El penultimo enlace es: " + penultimoEnlace)

//3. Enlace a http://prueba
var enlacePrueba = "http://prueba"
var enlaces = document.getElementsByTagName("a")
let contador = 0
for (let i = 0; i < enlaces.length; i++) {
    const enlace = enlaces[i]
    if (enlace.getAttribute('href') === enlacePrueba) {
        contador++
    }
}
console.log(`El enlace ${enlacePrueba} aparece ${contador} veces`)

//4. Numeros de enlace del tercer parrafo

var tercerParrafo = document.getElementsByTagName('p')[2]
var enlacesTercerParrafo = tercerParrafo.getElementsByTagName('a')
var numeroEnlacesTercerParrafo = enlacesTercerParrafo.length
console.log("El numero de enlaces del tercer párrafo es: "+numeroEnlacesTercerParrafo)