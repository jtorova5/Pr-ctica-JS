
// Ejercicio 1

/*
Crea un programa que tome dos números del usuario y 
utilice una estructura de control if-else para determinar si el primer número es 
mayor que el segundo. Si es así, resta el segundo número al primero y muestra el 
resultado en consola. Además, utiliza algún método de string para indicar si el 
resultado es un número positivo o negativo
*/

let num1 = parseInt(prompt(`Ejercicio 1 - Resta de números


Por favor ingresar un número: 
`))
let num2 = parseInt(prompt(`Ahora ingresa un número para restar: `))

let testBigger = (num1 > num2)

console.groupCollapsed('Ejercicio 1: ')

if (testBigger) {
    console.log(`El resultado es positivo: (${num1}) - (${num2}) = ${num1 - num2}`)
} else if (!testBigger) {
    console.log(`El resultado es negativo: (${num1}) - (${num2}) = ${num1 - num2}`)
}

console.groupEnd()

// Ejercicio 2

/*
Desarrolla un programa que solicite al usuario 
seleccionar una operación matemática (suma, resta, multiplicación o división) 
mediante un menú. Utiliza un switch case para realizar la operación seleccionada 
en dos números ingresados por el usuario. Además, utiliza el método Math para 
redondear el resultado y conviértelo a un número decimal utilizando 
Number.parseFloat(text) antes de mostrarlo en consola
*/


let num3 = parseInt(prompt(`Ejercicio 2 - Calculadora

Operaciones disponibles:

    1. Suma
    2. Resta
    3. Multiplicación
    4. División

Por favor ingresar el número de la operación deseada:
`))

let num4
let num5

console.groupCollapsed('Ejercicio 2: ')

switch (num3) {
    case 1:
        num4 = parseInt(prompt(`Ingresa un número a sumar: `))
        num5 = parseInt(prompt(`Ingresa otro número a sumar: `))
        console.log(`(${num4}) + (${num5}) = ${Number.parseFloat(Math.round(num4 + num5))}`)
        break
    case 2:
        num4 = parseInt(prompt(`Ingresa el minuendo: `))
        num5 = parseInt(prompt(`Ingresa el sustraendo: `))
        console.log(`(${num4}) - (${num5}) = ${Number.parseFloat(Math.round(num4 - num5))}`)
        break
    case 3:
        num4 = parseInt(prompt(`Ingresa un factor de la multiplicación: `))
        num5 = parseInt(prompt(`Ingresa el otro factor de la multiplicación: `))
        console.log(`(${num4}) * (${num5}) = ${Number.parseFloat(Math.round(num4 * num5))}`)
        break
    case 4:
        num4 = parseInt(prompt(`Ingresa el dividendo: `))
        num5 = parseInt(prompt(`Ingresa el divisor: `))
        console.log(`(${num4}) / (${num5}) = ${Number.parseFloat(Math.round(num4 / num5))}`)
        break
    default:
        console.log('Opción no válida, ingrese un número correcto')
        break
}

console.groupEnd()

// Ejercicio 3

/*
Implementa un programa que solicite al usuario un 
número y utilice un bucle for para imprimir la tabla de multiplicar de ese número 
del 1 al 10. Además, utiliza el método Math para calcular cada producto y 
convierte el resultado a una cadena de texto utilizando toString antes de 
mostrarlo en consola
*/

let num6 = parseInt(prompt(`Ejercicio 3 - Tabla de multiplicar


Por favor ingresar un número para obtener su tabala de multiplicar: 
`))

console.groupCollapsed('Ejercicio 3: ')

for (let i = 1; i <= 10; i += 1) {
    console.log(`${num6} * ${i} = ${num6 * i}`)
}

console.groupEnd()

