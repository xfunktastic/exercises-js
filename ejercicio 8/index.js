num = parseInt(prompt("Ingresa un numero: "))
function calcularParImpar (num){
    if(num % 2 == 0){
        return "El numero es par"
    }
    else{
        return "El numero es impar"
    }
}
calcularParImpar(num)