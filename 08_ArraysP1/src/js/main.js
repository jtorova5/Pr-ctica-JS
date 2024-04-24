
// Crear un array

const simpleArray = [
    1,
    'alfa',
    true,
    [2, 3, 5, 6],
    { name: 'jhonatan', lastName: 'toro' },
    false
]

const simpleArray2 = []
const simpleArray3 = Array('uno', 'dos', 'tres')
const simpleArray4 = new Array(3)
simpleArray4.push('hola mundo')

console.groupCollapsed('Creación de arrays: ')

console.info(simpleArray)
console.info(simpleArray2)
console.info(simpleArray3)
console.info(simpleArray4)

console.groupEnd()

// Extracción de información

console.groupCollapsed('Sacando información del array: ')

console.groupCollapsed('Opción con "Array.from()": ')

let arrayName = Array.from(simpleArray[4].name)

console.log(arrayName)

console.groupEnd()

console.groupCollapsed('Opción con "split()": ')

arrayName = simpleArray[4].name.split('')

console.log(arrayName)

console.groupEnd()

// Extracción de información con at

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

console.groupCollapsed('Opción con ".at()": ')

console.log(alphabet[6])
console.log(alphabet.at(-1))  // Permite devolverse

console.groupEnd()
console.groupEnd()

// Actualizando datos

alphabet[0] = 'alpha'
// alphabet.at(1) = 'bravo'  // No sirve para actualizar, solo para buscar
alphabet[1] = 'bravo'

console.groupCollapsed('Actualizando datos: ')

console.log(alphabet)

console.groupEnd()

// Agregar y eliminar datos:

// Agregando datos con push - Se agrega el dato al final del array

console.groupCollapsed('Agregando y eliminando datos: ')

alphabet.push('h')
alphabet.push('i')
alphabet.push('j')

console.groupCollapsed('Agregando datos con ".push()": ')

console.log(alphabet)

console.groupEnd()

// Agregando datos con unshift - Se agrega el dato a la primera posición del array

alphabet.unshift(1)
alphabet.unshift(2)
alphabet.unshift(3)

console.groupCollapsed('Agregando datos con ".unshift()": ')

console.log(alphabet)

console.groupEnd()

// Eliminando datos con pop - Elimina el último valor del array y lo retorna

alphabet.pop()
alphabet.pop()
alphabet.pop()
let = letraEliminada = alphabet.pop()

console.groupCollapsed('Eliminando datos con ".pop()": ')

console.log(alphabet)
console.log(letraEliminada)

console.groupEnd()

// Eliminando datos con shift - Elimina el primer valor del array y lo retorna

alphabet.shift()
let numeroEliminado = alphabet.shift()

console.groupCollapsed('Eliminando datos con ".shift()": ')

console.log(alphabet)
console.log(numeroEliminado)

console.groupEnd()

// Eliminando datos con delete - Borra la posición indicada pero deja el espacio vacío

delete alphabet[1]

console.groupCollapsed('Eliminando datos con "delete": ')

console.log(alphabet)

console.groupEnd()
console.groupEnd()

// Obteniendo índices

console.groupCollapsed('Obteniendo índices: ')

let positionE = alphabet.indexOf('e')

console.groupCollapsed('Obteniendo índices con "indexOf": ')

console.log(`La posición de la letra "e" es: ${positionE}`)

console.groupEnd()
console.groupEnd()

// Uniendo arrays

console.groupCollapsed('Uniendo arrays: ')

let clanGates = ['david', 'luisa', 'simon']
let clanGosling = ['mariana', 'kevin', 'david']

// Unión con concat

console.groupCollapsed('Unión usando ".concat()": ')

console.log('Clan gates:', clanGates)
console.log('Clan gosling:', clanGosling)

// clanGates = clanGates.concat(clanGosling)

console.log('Clan unido:', clanGates.concat(clanGosling))

console.groupEnd()

// Unión con spread operator "..."

console.groupCollapsed('Unión usando spread operator "...": ')

console.log('Clan gates:', clanGates)
console.log('Clan gosling:', clanGosling)

// clanGates = [...clanGates, ...clanGosling]

console.log('Clan unido:', [...clanGates, ...clanGosling])

console.groupEnd()
console.groupEnd()

// Join

console.groupCollapsed('Join: ')

console.log('Clan gates:', clanGates)
let arrayUnido = clanGates.join('->')  // Separa la lista con el caracter deseado
console.log('Clan gates:', arrayUnido)

console.groupEnd()

// Split

console.groupCollapsed('Split: ')

console.log('Clan gates:', arrayUnido)
arrayUnido = arrayUnido.split('->')
console.log('Clan gates:', arrayUnido)

console.groupEnd()

// Recorrer arrays

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let stringUnido = numeros.join(',')
let numerosUnidosDeNuevo = stringUnido.split(',')

console.groupCollapsed('Ejercicio join/split/map/for of/for each: ')

console.log('Array inicial:', numeros)
console.log('Array unido;', stringUnido)
// console.log('Array final:', numerosUnidosDeNuevo.map(numero => parseInt(numero)))
console.log('Array final:', numerosUnidosDeNuevo.map(Number))

// for (const numero of numerosUnidosDeNuevo) {
//     console.log(parseInt(numero))
// }

// numerosUnidosDeNuevo.forEach(numero => {
//     console.log(parseInt(numero))
// })

// numerosUnidosDeNuevo.map(numero => {
//     return parseInt(numero)
// })

console.groupEnd()







