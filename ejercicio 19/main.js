function obtenerZonaDelClic(event) {
    var tamanoVentana = tamanoVentanaNavegador()
    var x = event.clientX
    var y = event.clientY
    var zona = ""

    if (x < tamanoVentana[0] / 2) {
        zona += "izquierda "
    } else {
        zona += "derecha "
    }

    if (y < tamanoVentana[1] / 2) {
        zona += "arriba"
    } else {
        zona += "abajo"
    }

    return zona
}

window.addEventListener("click", function(event) {
    var zonaClic = obtenerZonaDelClic(event)
    var posicionElement = document.querySelector(".posicion")
    posicionElement.textContent = "Zona: " + "[" + zonaClic + "]"
})
