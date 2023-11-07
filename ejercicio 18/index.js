function muestraInformacion(e, cuadroId) {
    var cuadro = document.getElementById(cuadroId);
    var info = cuadro.querySelector("div")

    cuadro.style.backgroundColor = (e.type === "mousedown") ? "#FFFFCC" : (e.type === "keydown") ? "#CCE6FF" : "white"

    if (cuadroId === "teclado" && e.type === "keydown") {
        var caracterPulsado = e.key
        var codigoAscii = e.key.charCodeAt(0)

        info.innerHTML = "Carácter [" + caracterPulsado + "]<br>Código [" + codigoAscii + "]"
    } else if (cuadroId === "raton") {
        var posXNavegador = e.clientX
        var posYNavegador = e.clientY
        var posXPagina = e.pageX
        var posYPagina = e.pageY

        info.innerHTML = "Navegador " + "[" + posXNavegador +", "+ posYNavegador + "]" + "<br>Pagina " + "[" + posXPagina +", "+ posYPagina + "]"
    }

    setTimeout(function() {
        cuadro.style.backgroundColor = "white"
        info.innerHTML = ""
    }, 2000)
}

document.addEventListener("mousemove", function(e) {
    muestraInformacion(e, "raton")
})

document.addEventListener("mousedown", function(e) {
    muestraInformacion(e, "raton")
})

document.addEventListener("keydown", function(e) {
    muestraInformacion(e, "teclado")
})
