texto = prompt("Ingresa la palabra a verificar palindromidad: ")
function palindromo(texto){
    textoInvertido = texto.split('').reverse().join('')
    if(texto == textoInvertido){
        return console.log(`${texto} es un palindromo`)
    }
    else{
        return console.log(`${texto} NO es un palindromo`)
    }
}
palindromo(texto)