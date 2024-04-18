
// Tipos de datos básicos

const variable1 = 12
let variable2 = '4'
const variable3 = 'Hola mundo'
let variable4 = true
let variable5 = null
let variable6 = undefined
let variable7 = [1, 2, 3, 4, 5, 6]
let variable8 = {'name': 'Jhonatan', 'lastName': 'Toro', 'age': 26}
let variable9 = function () {
    console.log('Hola mundo')
}

console.groupCollapsed('Tipos de datos: ')
console.log("La variable 1 es de tipo:", typeof (variable1))
console.log("La variable 2 es de tipo:", typeof (variable2))
console.log("La variable 3 es de tipo:", typeof (variable3))
console.log("La variable 4 es de tipo:", typeof (variable4))
console.log("La variable 5 es de tipo:", typeof (variable5))
console.log("La variable 6 es de tipo:", typeof (variable6))
console.log("La variable 7 es de tipo:", typeof (variable7))
console.log("La variable 8 es de tipo:", typeof (variable8))
console.log("La variable 9 es de tipo:", typeof (variable9))
console.groupEnd()

// Operadores aritméticos

let numero1 = 15
let numero2 = 4

let suma = numero1 + numero2
let resta = numero1 - numero2
let multiplicacion = numero1 * numero2
let division = numero1 / numero2
let potencia = numero1 ** numero2
let modulo = numero1 % numero2

console.groupCollapsed('Operadores aritméticos: ')
console.log(`${numero1} + ${numero2} = ${suma}`)
console.log(`${numero1} - ${numero2} = ${resta}`)
console.log(`${numero1} * ${numero2} = ${multiplicacion}`)
console.log(`${numero1} / ${numero2} = ${division}`)
console.log(`${numero1} ^ ${numero2} = ${potencia}`)
console.log(`${numero1} % ${numero2} = ${modulo}`)
console.groupEnd()

// Operadores de incremento y decremento

let numeroParaIncrementar = 49
let numeroIncrementado = numeroParaIncrementar++

console.groupCollapsed('Operadores de incremento y decremento: ')
console.log(`El número ${numeroParaIncrementar} incrementado con ++ queda: ${numeroParaIncrementar++}`)
console.groupEnd()

// Operadores de comparación

let comp1 = 4
let comp2 = "4"
let comp3 = 5
let comp4 = 4
let comp5 = 10
let comp6 = 'Jhonatan'
let comp7 = 'jhonatan'

console.groupCollapsed('Operadores de comparación: ')

// Operador de igualdad "=="

console.groupCollapsed('Operador de igualdad "==": ')
console.log(`${comp1} == ${comp1} = ${comp1 == comp1}`)
console.log(`${comp1} == ${comp2} = ${comp1 == comp2}`)
console.log(`${comp1} === ${comp2} = ${comp1 === comp2}`)
console.log(`${comp1} === ${comp1} = ${comp1 === comp1}`)
console.groupEnd()

// Operador de diferencia "!="

console.groupCollapsed('Operador menor que "!=": ')
console.log(`${comp1} != ${comp1} = ${comp1 != comp1}`)
console.log(`${comp1} != ${comp2} = ${comp1 != comp2}`)
console.log(`${comp1} !== ${comp2} = ${comp1 !== comp2}`)
console.log(`${comp1} !== ${comp1} = ${comp1 !== comp1}`)
console.groupEnd()

// Operador menor que "<"

console.groupCollapsed('Operador menor que "<": ')
console.log(`${comp1} < ${comp3} = ${comp1 < comp3}`)
console.log(`${comp3} != ${comp1} = ${comp3 < comp1}`)
console.log(`${comp1} < ${comp4} = ${comp1 < comp4}`)
console.log(`${comp1} <= ${comp4} = ${comp1 <= comp4}`)
console.groupEnd()

// Operador mayor que ">"

console.groupCollapsed('Operador mayor que ">": ')
console.log(`${comp1} > ${comp3} = ${comp1 > comp3}`)
console.log(`${comp3} != ${comp1} = ${comp3 > comp1}`)
console.log(`${comp1} > ${comp4} = ${comp1 > comp4}`)
console.log(`${comp1} >= ${comp4} = ${comp1 >= comp4}`)
console.groupEnd()

console.groupEnd()

// Operadores lógicos

console.groupCollapsed('Operadores lógicos: ')

// Operador AND "&&"

console.groupCollapsed('Operador AND "&&": ')
console.log(`(${comp1} < ${comp3}) && (${comp5} > ${comp3}) = ${(comp1 < comp3) && (comp5 > comp3)}`)
console.log(`(${comp3} < ${comp1}) && (${comp5} > ${comp3}) = ${(comp3 < comp1) && (comp5 > comp3)}`)
console.groupEnd()

// Operador OR "||"

console.groupCollapsed('Operador OR "||": ')
console.log(`(${comp1} < ${comp3}) || (${comp5} > ${comp3}) = ${(comp1 < comp3) || (comp5 > comp3)}`)
console.log(`(${comp3} < ${comp1}) || (${comp5} < ${comp3}) = ${(comp3 < comp1) || (comp5 < comp3)}`)
console.groupEnd()

// Operadores lógicos anidados

console.groupCollapsed('Operadores anidados: ')
console.log(`((${comp1} < ${comp3}) && (${comp3} < ${comp5})) || (${comp6} === ${comp7}) = ${((comp1 < comp3) && (comp3 < comp5)) || (comp6 === comp7)}`)
console.groupEnd()

// Operador de negación NOT "!"

let variable = true

console.groupCollapsed('Operador de negación NOT "!": ')
console.log(`El resultado "${variable}" negado, queda: ${!variable}`)
console.groupEnd()

console.groupEnd()