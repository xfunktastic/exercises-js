function anade() {
    var nuevoElemento = document.createElement("li")
    var texto = document.createTextNode("Nuevo elemento de lista")
    nuevoElemento.appendChild(texto)
    var lista = document.getElementById("lista")
    lista.appendChild(nuevoElemento)
  }