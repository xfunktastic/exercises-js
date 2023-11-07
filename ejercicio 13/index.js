var regexFecha = /^\d{2}\/\d{2}\/\d{4}$/
var texto = "Nací el 05/04/1982 en Donostia."
if (regexFecha.test(texto)) {
    console.log("La fecha es válida.")
} else {
    console.log("La fecha no es válida.")
}

var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/
var email = "mi.correo@example.com"
if (regexEmail.test(email)) {
    console.log("La dirección de correo es válida.")
} else {
    console.log("La dirección de correo no es válida.")
}

function escapeHTML(text) {
    return text
        .replace(/&/g, "&amp")
        .replace(/"/g, "&quot")
        .replace(/</g, "&lt")
        .replace(/>/g, "&gt")
}

var nombreCompleto = "John Smith"
var regexNombreApellido = /(\w+) (\w+)/
var nombreInvertido = nombreCompleto.replace(regexNombreApellido, "$2, $1")
console.log(nombreInvertido)

var cadenaHTML = "<p>Este es un <script>alert('peligro');</script> texto.</p>"
var regexEliminarEtiquetasPeligrosas = /<script>[\s\S]*?<\/script>/gi
var textoLimpio = cadenaHTML.replace(regexEliminarEtiquetasPeligrosas, "")
console.log(textoLimpio)
