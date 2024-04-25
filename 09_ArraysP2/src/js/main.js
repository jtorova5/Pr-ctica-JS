
// Reverse() - toReversed()

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let array2 = array1.reverse(function(item) {
    return item
})

let array3 = array1.toReversed()

console.groupCollapsed('reverse() - toReversed(): ')

console.log('Array1 - reverse:', array1)
console.log('Array2 - reverse:', array2)
console.log('Array3 - toReversed:', array3)

// Ejercicio reverse() - toReversed()

let frutas = ['uvas', 'moras', 'maracuyá', 'sandia', 'zapote']
let frutasInverso = []

frutasInverso = frutas.toReversed()

frutasInverso = frutasInverso.map(fruta => fruta.toUpperCase())

console.groupCollapsed('Ejercicio: ')

console.log('frutas:', frutas)
console.log('Inverso:', frutasInverso)

console.groupEnd()
console.groupEnd()

// Sort - Ordenar lista A-Z

let listaDesordenada = ['lucas', 'maria', 'ana', 'pablo', 23, true]
let listaOrdenada = listaDesordenada.toSorted()

console.groupCollapsed('sort() - toSorted(): ')

console.log('Desordenada:', listaDesordenada)
console.log('Ordenada:', listaOrdenada)

console.groupEnd()

// For each - Método para recorrer una lista

let listaCoders = ['maria', 'pablo', 'lucas']

console.groupCollapsed('for each: ')

listaCoders.forEach((coder, index) => console.log('El coder', coder, 'está en la posición', index))

console.groupEnd()

// Every - Evalua mediante un criterio a todos los elementos de la lista

let numeros = [55, 88, 111, 66, 11, 99, 22, 7, 4, 5]

let respuesta = numeros.every(numero => numero > 0)
let pares = numeros.every(numero => (numero % 2 == 0))

console.groupCollapsed('Every: ')

console.log('¿Positivo?', respuesta)
console.log('Par?', pares)

console.groupEnd()

// Some

let nombres = ['lucas', 'maria', 'pablo']
let testNombre = 'pedro'

let checkNombre = nombres.some(nombre => nombre == testNombre)

console.groupCollapsed('Some: ')

console.log(`¿"${testNombre}" está en la lista?`, checkNombre)

console.groupEnd()

// Filter

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let listaPares = lista.filter(numero => (numero % 2 == 0))
let listaImpares = lista.filter(numero => (numero % 2 != 0))

console.groupCollapsed('Filter: ')

console.log('Original:', lista)
console.log('Pares', listaPares)
console.log('Impares', listaImpares)

console.groupEnd()