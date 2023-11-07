var text = prompt("Ingresa una cadena de texto: ")

function showText(text){
    if(text==text.toUpperCase()){
        return "La cadena de texto es mayuscula"
    }
    else if(text==text.toLowerCase()){
        return "La cadena de texto es minuscula"
    }
    else{
        return "La cadena de texto es una mezcla de ambas"
    }
}

var res = showText(text)
console.log(re)