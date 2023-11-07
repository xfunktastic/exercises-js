function muestra() {
    const parrafo = document.querySelector('p')
    const contenidoOculto = parrafo.querySelector('.adicional.oculto')
    contenidoOculto.classList.remove('oculto')
    contenidoOculto.classList.add('visible')
    const enlace = document.querySelector('.enlace')
    enlace.style.display = 'none'
}