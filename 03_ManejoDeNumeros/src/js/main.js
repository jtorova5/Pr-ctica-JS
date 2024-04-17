
// Operaciones básicas con números 

let myFirstNumber = 5.000000001
let mySecondNumber = parseInt("2")  //Transformación de datos
let myThirdNumber = 30000000000000
let myFourthNumber = 300_000_00_00_0000

document.write(myFirstNumber)

// Operaciones básicas
console.groupCollapsed('Operaciones básicas: ')
console.info(myFirstNumber * mySecondNumber)
console.info(myFirstNumber - mySecondNumber)
console.info(myFirstNumber / mySecondNumber)
console.info(myFirstNumber + mySecondNumber)
console.groupEnd()

// Verificaciones de números
console.groupCollapsed('Verificaciones de números: ')
console.info(typeof(myFirstNumber))
console.info(Number.isInteger(myFirstNumber))
console.groupEnd()

// Operaciones básicas con números grandes
console.groupCollapsed('Operaciones básicas con números grandes: ')
console.info(mySecondNumber * myFourthNumber)
console.info(mySecondNumber - myFourthNumber)
console.info(mySecondNumber / myFourthNumber)
console.info(mySecondNumber + myFourthNumber)
console.groupEnd()

// Verificación de capacidad del lenguaje

const number1 = 45
const number1Test = Number.isFinite(number1)
const maxNumber = Number.MAX_VALUE
const minNumber = Number.MIN_VALUE
const maxSafeNumber = Number.MAX_SAFE_INTEGER
const minSafeNumber = Number.MIN_SAFE_INTEGER

console.groupCollapsed('Verificaciones de capacidad del lenguaje: ')
console.info(`¿El número ${number1} es finito? ${number1Test}`)
console.info(`El valor máximo de JS es: ${maxNumber}`)
console.info(`El valor mínimo de JS es: ${minNumber}`)
console.info(`El valor máximo seguro de JS es: ${maxSafeNumber}`)
console.info(`El valor mínimo seguro de JS es: ${minSafeNumber}`)
console.groupEnd()

// Exponenciales

const exampleExp = 84
const exp1 = exampleExp.toExponential(1)
const exp2 = exampleExp.toExponential(2)
const exp3 = exampleExp.toExponential(3)
const exp4 = exampleExp.toExponential(4)

console.groupCollapsed('Exponenciales ')
console.info(`Representaciones exponenciales: ${exp1}, ${exp2}, ${exp3}, ${exp4}`)
console.groupEnd()

// Binarios, octales y hexadecimales

const numberToTransform = 2387532162158347
const binary = numberToTransform.toString(2)
const octal = numberToTransform.toString(8)
const hexadecimal = numberToTransform.toString(16)

console.groupCollapsed('Binarios, octales y hexadecimales: ')
console.info(`${numberToTransform} en binario es: ${binary}`)
console.info(`${numberToTransform} en octal es: ${octal}`)
console.info(`${numberToTransform} en hexadecimal es: ${hexadecimal}`)
console.groupEnd()

// Redondeos

const numberToRound = 2.9
const round = Math.round(numberToRound)
const floorRound = Math.floor(numberToRound)
const ceilRound = Math.ceil(numberToRound)

console.groupCollapsed('Redondeos: ')
console.info(`${numberToRound} con round es: ${round}`)
console.info(`${numberToRound} con Math.floor es: ${floorRound}`)
console.info(`${numberToRound} con Math.ceil es: ${ceilRound}`)
console.groupEnd()


let escalado = Math.round(Math.random() * (92-90) + 90)

console.log(escalado)