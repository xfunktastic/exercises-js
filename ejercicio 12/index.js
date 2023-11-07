const numLanzamientos = 36000
const numApariciones = new Array(11).fill(0)

for (let i = 0; i < numLanzamientos; i++) {
  const dado1 = Math.floor(Math.random() * 6) + 1
  const dado2 = Math.floor(Math.random() * 6) + 1
  const suma = dado1 + dado2
  numApariciones[suma - 2]++
}

console.log("Resultados de los lanzamientos:");
for (let i = 2; i <= 12; i++) {
  console.log(`Suma ${i}: ${numApariciones[i - 2]} apariciones`)
}

