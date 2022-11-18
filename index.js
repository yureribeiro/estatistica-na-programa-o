const media = (...numeros) => {
    const soma = numeros.reduce((accum, num) => accum + num, 0 ) 
        return soma / numeros.length
} ;
console.log(`Média Aritmética Simples: ${media(3, 5, 8, 9)}`)
//result: = Média Aritmética Simples: 6.25

const mediaPonderada = (...entradas) => {
  const soma = entradas.reduce((accum, {numero, peso}) => accum + (numero * peso), 0)
  const pesoSoma = entradas.reduce((accum, entrada) => accum + entrada.peso, 0)
    return soma / pesoSoma
} ;
console.log(`Média ponderada: ${mediaPonderada(
  { numero: 9, peso: 3 },
  { numero: 10, peso: 1 },
  { numero: 5, peso: 1 },
)}`) 
//result = Média ponderada: 8.4

const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b)
  const middle = Math.floor(orderedNumbers.length / 2)
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle]
  }
  const firstMedian = orderedNumbers[middle - 1]
  const secondMedian = orderedNumbers[middle]
  return media(firstMedian, secondMedian)
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)
//result: Mediana: 6
//result: Mediana: 8

const moda = (...numbers) => {
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  const quantities = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])
  quantities.sort((a, b) => b[1] - a[1])
  return quantities[0][0]
}

console.log(`Moda: ${moda(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)
//result: Moda: 99