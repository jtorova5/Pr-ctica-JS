
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
    let result = (num6 * i).toString()
    console.log(`${num6} * ${i} = ${result}`)
}

console.groupEnd()

// Ejercicio 4

/*
Crea un programa que pida al usuario su edad y la 
cantidad de horas de sueño diarias. Utiliza una estructura de control if-else con 
operadores lógicos para determinar si la persona es mayor de edad (más de 18 
años) y si duerme lo suficiente (más de 7 horas). Utiliza el Método Math para 
redondear la cantidad de horas de sueño y muestra un mensaje en consola 
indicando si la persona tiene un buen equilibrio entre edad y descanso
*/

let age = parseInt(prompt(`Ejercicio 4 - Calculadora de sueño


Por favor ingrese su edad: `))
let sleepingHours = Math.round(parseInt(prompt(`Ejercicio 4 - Calculadora de sueño


Ingrese la cantidad de horas que destina para dormir: `)))

console.groupCollapsed('Ejercicio 4: ')

if ((age >= 18) && (sleepingHours >= 7)) {
    console.log(`Eres mayor de edad y tienes un buen equilibrio entre tu edad y el descanso`)
} else if ((age >= 18) && (sleepingHours < 7)) {
    console.log(`Eres mayor de edad pero NO tienes un buen equilibrio entre tu edad y el descanso`)
} else if ((age < 18) && (sleepingHours >= 7)) {
    console.log(`NO eres mayor de edad pero tienes un buen equilibrio entre tu edad y el descanso`)
} else {
    console.log(`NO eres mayor de edad y NO tienes un buen equilibrio entre tu edad y el descanso`)
}

console.groupEnd()

// Ejercicio 5

/*
Desarrolla un programa que solicite al usuario un día de 
la semana (por ejemplo, "lunes"). Utiliza un switch case con operadores lógicos 
para determinar si el día ingresado es un día laboral (de lunes a viernes) o un fin 
de semana (sábado o domingo). Luego, utiliza los métodos substring y slice de 
string para mostrar un mensaje en consola indicando si es un día hábil o de 
descanso
*/

let weekDay = prompt(`Ejercicio 5 - Días de la semana


Por favor escriba un día de la semana: `).toLowerCase()

console.groupCollapsed('Ejercicio 5: ')

switch (weekDay) {
    case 'lunes':
        console.log(`El ${weekDay} es un día laboral`)
        break
    case 'martes':
        console.log(`El ${weekDay} es un día laboral`)
        break
    case 'miercoles':
        console.log(`El ${weekDay} es un día laboral`)
        break
    case 'miércoles':
        console.log(`El ${weekDay} es un día laboral`)
        break
    case 'jueves':
        console.log(`El ${weekDay} es un día laboral`)
        break
    case 'viernes':
        console.log(`El ${weekDay} es un día laboral`)
        break
    case 'sabado':
        console.log(`El ${weekDay} es fin de semana`)
        break
    case 'sábado':
        console.log(`El ${weekDay} es fin de semana`)
        break
    case 'domingo':
        console.log(`El ${weekDay} es fin de semana`)
        break
    default:
        console.log(`Ojo, día inexistente (${weekDay})`)
}

console.groupEnd()

// Ejercicio 6

/*
Implementa un programa que solicite al usuario ingresar 
un número. Utiliza un bucle for para encontrar la suma de todos los números 
impares hasta el número ingresado. Además, utiliza operadores lógicos para 
identificar números impares y el Método Math para realizar cálculos. Muestra el 
resultado en consola
*/

let  odd = prompt(`Ejercicio 6 - Suma de impares


Por favor escriba un número: `)

let aux = 0

for (let i = 1; i <= odd; i += 1) {
    if (i % 2 != 0) {
        aux += i
    }
}
console.groupCollapsed('Ejercicio 6: ')

console.log(`La sumatoria de números impares hasta el ${odd} es: ${aux}`)

console.groupEnd()

// Ejercicio 7

/*
Crea un programa que solicite al usuario ingresar un 
número decimal. Utiliza una estructura if-else con operadores de asignación para 
redondear el número hacia abajo utilizando el método Math.floor() y luego 
convierte el resultado a un número entero utilizando Number.parseInt. Muestra 
el número original y el número redondeado en consola
*/

let  decimalNumber = parseFloat(prompt(`Ejercicio 7 - Decimal / entero


Por favor escriba un número decimal: `))

let convertedNumber = Number.parseInt(Math.floor(decimalNumber))

console.groupCollapsed('Ejercicio 7: ')

console.log(`Número original: ${decimalNumber}
Número convertido ${convertedNumber}`)

console.groupEnd()

// Ejercicio 8

/*
Desarrolla un programa que pida al usuario una frase y 
utilice un switch case para realizar diferentes operaciones en la frase. 
Dependiendo de la opción seleccionada (por ejemplo, 1 para convertir a 
mayúsculas, 2 para reemplazar espacios con guiones, etc.), realiza la operación 
correspondiente y muestra el resultado en consola. Utiliza Number.parseInt para 
manejar las opciones ingresadas por el usuario
*/

let  sentence = prompt(`Ejercicio 8 - Modificar frase


Por favor escriba una frase: `)
let  option = parseInt(prompt(`Ejercicio 8 - Modificar frase

Opciones disponibles:

    1. Convertir a mayúsculas
    2. Convertir a minúsculas
    3. Poner "-" en los espacios

Por favor ingresar el número de la opción deseada:`))

console.groupCollapsed('Ejercicio 8: ')

switch (option) {
    case 1:
        sentence = sentence.toUpperCase()
        console.log(`${sentence}`)
        break
    case 2:
        sentence = sentence.toLowerCase()
        console.log(`${sentence}`)
        break
    case 3:
        sentence = sentence.split(' ').join('-')
        console.log(`${sentence}`)
        break
    default:
        console.log(`Ingresar una opción válida`)
        break
}

// Ejercicio 9

/*
Implementa un programa que solicite al usuario ingresar 
una palabra. Utiliza un bucle for para alternar entre caracteres en mayúsculas y 
minúsculas en la palabra. Utiliza operadores de asignación como toUpperCase() y 
toLowerCase() para cambiar el caso de cada caracter en cada iteración del bucle. 
Muestra el resultado en consola
*/

let  word = prompt(`Ejercicio 9 - Intercambiar palabra


Por favor escriba una palabra: `)

for (let i = 0; i < word.length; i += 1) {
    if (i % 2 == 0) {
        word[i] = word[i].toUpperCase()
    } else if (i % 2 != 0) {
        word[i] = word[i].toLowerCase()
    }
}

console.log(`${word}`)
