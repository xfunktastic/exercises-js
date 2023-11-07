var maxCaracteres = 100
var caracteresIngresados = 0
var ratonHizoClick = false // Variable para controlar si el ratón hizo clic

function muestraInformacion(e, cuadroId) {
    if (cuadroId === "raton") {
        var cuadro = document.getElementById(cuadroId)
        var info = cuadro.querySelector("div")
        var posXNavegador = e.clientX
        var posYNavegador = e.clientY
        var posXPagina = e.pageX
        var posYPagina = e.pageY

        info.innerHTML = "Navegador " + "[" + posXNavegador + ", " + posYNavegador + "]" + "<br>Pagina " + "[" + posXPagina + ", " + posYPagina + "]"
        
        if (e.type === "mousedown") {
            cuadro.style.backgroundColor = "#FFFFCC" // Fondo amarillo cuando se hace clic con el ratón
            ratonHizoClick = true // Indicar que el ratón hizo clic
        } else if (e.type === "mousemove" && !ratonHizoClick) {
            // Cambiar el fondo solo si el ratón no hizo clic
            cuadro.style.backgroundColor = "white"
        }
        
        setTimeout(function() {
            cuadro.style.backgroundColor = "white"
        }, 2000)
    }
    
    if (cuadroId === "teclado" && e.type === "keydown") {
        var cuadro = document.getElementById(cuadroId)
        var info = cuadro.querySelector("div")
        
        if (caracteresIngresados >= maxCaracteres) {
            e.preventDefault() // Evitar la entrada de más caracteres
            return // Salir de la función sin hacer más nada
        }
        
        var caracterPulsado = e.key
        var codigoAscii = e.key.charCodeAt(0)
        
        info.innerHTML = "Carácter [" + caracterPulsado + "]<br>Código [" + codigoAscii + "]"
        
        caracteresIngresados++
        
        var caracteresRestantes = maxCaracteres - caracteresIngresados
        info.innerHTML += "<br>Caracteres restantes: " + caracteresRestantes
        
        cuadro.style.backgroundColor = "#CCE6FF" // Fondo azul cuando se pulsa una tecla
        
        setTimeout(function() {
            cuadro.style.backgroundColor = "white"
            info.innerHTML = ""
        }, 2000)
    }
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
