var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numDNI = parseInt(prompt("Ingresa el numero de DNI: "))
var letraDNI = prompt("Ingresa la letra del DNI")

if(numDNI < 0 || numDNI > 99999999){
    console.log("El numero no es válido")
}
else{
    var resto = numDNI % 23
    var calcularLetraDNI = letras[resto]
    if(calcularLetraDNI!=letraDNI){
        alert("La letra que ha indicado no es correcta")
    }
    else{
        alert("El número y la letra de DNI son correctos")
    }
}





