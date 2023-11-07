var enlaces = document.getElementsByTagName('a')

for (var i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener('click', function() {
        var parrafo = this.previousElementSibling
        if (parrafo.style.display === 'none' || parrafo.style.display === '') {
            parrafo.style.display = 'block'
            this.textContent = 'Ocultar contenidos'
        } else {
            parrafo.style.display = 'none'
            this.textContent = 'Mostrar contenidos'
        }
    })
}