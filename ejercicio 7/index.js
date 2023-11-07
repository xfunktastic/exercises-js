var num = 10

function calcularFactorial(num){
    var resultado = 1

    if (num == 0){
        resultado = 1
    }
    else if (num <= 0){
        resultado = "Math Error"
    }
    else {
        for(var i = 1; i<=num;i++){
            resultado *= i
        }
    }
    console.log(`El factorial de ${num} es: ${resultado}`)
}
calcularFactorial(num)


