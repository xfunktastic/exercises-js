//Parte 1
var valores = [true,5,false,"hola","adios",2]
var texto1 = valores[3]
var texto2 = valores[4]

if (texto1.length > texto2.length){
    console.log("El texto mayor es: ", texto1)
}
else if(texto2.length > texto1.length){
    console.log("El texto mayor es: ",texto2)
}
else{
    console.log("Los dos textos tiene la misma longitud")
}

//Parte 2
var bool1 = valores[0]
var bool2 = valores[2]
var resTrue = bool1 || bool2
var resFalse = bool1 && bool2

console.log("Resultado true: ",resTrue)
console.log("Resultado false: ",resFalse)

//Parte 3
var num1 = valores[1]
var num2 = valores[5] 

var sum = num1 + num2 //Suma
console.log("El resultado de la suma es: ",sum)

var res = num1 - num2 //Resta
console.log("El resultado de la resta es: ",res)

var mult = num1 * num2 //Multiplicacion
console.log("El resultado de la multiplicacion es: ",mult)

var div = num1 / num2 //Division
console.log("El resultado de la division es: ",div)

var modulo = num1 % num2 //Modulo
console.log("El resultado del modulo es: ",modulo)
