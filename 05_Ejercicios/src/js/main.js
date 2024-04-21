
// 1. Verifica si un número es positivo

let num = 20

console.groupCollapsed('Ejercicio 1: ')

if (num > 0) {
    console.log(`El número ${num} es positivo`)
} else {
    console.log(`El número ${num} es negativo`)
}

console.groupEnd()

// 2. Verifica si un número es negativo

let num2 = -20

console.groupCollapsed('Ejercicio 2: ')

if (num2 < 0) {
    console.log(`El número ${num2} es negativo`)
} else {
    console.log(`El número ${num2} es positivo`)
}

console.groupEnd()

// 3. Comprueba si un número es par

let num3 = 80
let parTest = num3 % 2

console.groupCollapsed('Ejercicio 3: ')

if (parTest == 0) {
    console.log(`El número ${num3} es par`)
} else {
    console.log(`El número ${num3} es impar`)
}

console.groupEnd()

// 4. Comprueba si un número es impar

let num4 = 33
let imparTest = num4 % 2

console.groupCollapsed('Ejercicio 4: ')

if (imparTest != 0) {
    console.log(`El número ${num4} es impar`)
} else {
    console.log(`El número ${num4} es par`)
}

console.groupEnd()

// 5. Determina si un número es múltiplo de 5

let num5 = 40
let multiploDe = 5
let pruebaMultiplo = num5 % multiploDe

console.groupCollapsed('Ejercicio 5: ')

if (pruebaMultiplo == 0) {
    console.log(`El número ${num5} es múltiplo de ${multiploDe}`)
} else {
    console.log(`El número ${num5} NO es múltiplo de ${multiploDe}`)
}

console.groupEnd()

// 6. Verifica si un número es divisible entre 3

let num6 = 30
let divisiblePor = 3
let pruebaDivisible = num6 % divisiblePor

console.groupCollapsed('Ejercicio 6: ')

if (pruebaDivisible == 0) {
    console.log(`El número ${num6} es divisible por ${divisiblePor}`)
} else {
    console.log(`El número ${num6} NO es divisible por ${divisiblePor}`)
}

console.groupEnd()

// 7. Determina si un número es mayor que 100

let num7 = 101
let limite = 100

console.groupCollapsed('Ejercicio 7: ')

if (num7 > limite) {
    console.log(`El número ${num7} es mayor que ${limite}`)
} else {
    console.log(`El número ${num7} es menor que ${limite}`)
}

console.groupEnd()

// 8. Verifica si un número es menor que -50 

let num8 = -60
let limite2 = -50

console.groupCollapsed('Ejercicio 8: ')

if (num8 < limite2) {
    console.log(`El número ${num8} es menor que ${limite2}`)
} else {
    console.log(`El número ${num8} es mayor que ${limite2}`)
}

console.groupEnd()

// 9. Comprueba si un número está en el rango de 20 a 50

let num9 = 23
let limiteInf = 20
let limiteSup = 50

console.groupCollapsed('Ejercicio 9: ')

if ((num9 > limiteInf) && (num9 < limiteSup)) {
    console.log(`El número ${num9} se encuentra en el rango (${limiteInf}, ${limiteSup})`)
} else {
    console.log(`El número ${num9} NO se encuentra en el rango (${limiteInf}, ${limiteSup})`)
}

console.groupEnd()

// 10. Determina si un número es igual a 0

let num10 = 0
let test = 0

console.groupCollapsed('Ejercicio 10: ')

if (num10 == test) {
    console.log(`El ${num10} es igual a ${test}`)
} else {
    console.log(`El ${num10} NO es igual a ${test}`)
}

console.groupEnd()

// 11. Verifica si un número es mayor que -10 y menor que 10

let num11 = 5
let limiteInf2 = -10
let limiteSup2 = 10

console.groupCollapsed('Ejercicio 11: ')

if ((num11 > limiteInf2) && (num11 < limiteSup2)) {
    console.log(`El número ${num11} es mayor que ${limiteInf2} y menor que ${limiteSup2}`)
} else {
    console.log(`El número ${num11} NO se encuentra en el rango dado`)
}

console.groupEnd()

// 12. Determina si un número es un año bisiesto

let año = 2020
let testBisiesto = ((año % 4 == 0) || ((año % 100 == 0) && (año % 400 == 0)))

console.groupCollapsed('Ejercicio 12: ')

if (testBisiesto) {
    console.log(`El año ${año} es bisiesto`)
} else {
    console.log(`El año ${año} NO es bisiesto`)
}

console.groupEnd()

// 13. Verifica si una persona es mayor de edad (mayor o igual a 18 años)

let num12 = 17
let test2 = 18

console.groupCollapsed('Ejercicio 13: ')

if ((num12 >= test2) && (num12 >= 0)) {
    console.log(`Tienes ${num12} años, eres mayor de edad`)
} else {
    console.log(`No eres mayor de edad, debes cumplir ${test2} años para eso`)
}

console.groupEnd()

// 15. Verifica si un número es un cuadrado perfecto

let num13 = 36
let raiz = Math.sqrt(num13)
let raizRedondeada = Math.round(raiz)
let testCuadradoPerfecto = (raiz == raizRedondeada)

console.groupCollapsed('Ejercicio 15: ')

if (testCuadradoPerfecto) {
    console.log(`El número ${num13} es un cuadrado perfecto y su raiz es ${raiz}`)
} else {
    console.log(`El número ${num13} NO es un cuadrado perfecto`)
}

console.groupEnd()

// 16. Determina si un número es un número de Fibonacci (Es la suma de los dos números anteriores)

let num14 = 8
let a = 0
let b = 1
let testFibonacci = false

while (b < num14) {
    let temp = b;
    b = a + b;
    a = temp;
}

if (b === num14) {
    testFibonacci = true;
}

console.groupCollapsed('Ejercicio 16: ')

if (testFibonacci) {
    console.log(`${num14} es un número de Fibonacci`)
} else {
    console.log(`${num14} NO es un número de Fibonacci`)
}

console.groupEnd()

// 17. Verifica si un número es una potencia de 2

let num15 = 35
let raiz2 = Math.sqrt(num15)
let raizRedondeada2 = Math.round(raiz2)
let testPotencia = (raiz2 == raizRedondeada2)

console.groupCollapsed('Ejercicio 17: ')

if (testPotencia) {
    console.log(`El número ${num15} es potencia de 2 y su raíz es ${raiz2}`)
} else {
    console.log(`El número ${num15} NO es potencia de 2`)
}

console.groupEnd()

// 18. Determina si un número es un palíndromo

let num16 = 112211
let numString = (num16.toString()).split('').reverse().join('')
let testPalindromo = (num16 == numString)

console.groupCollapsed('Ejercicio 18: ')

if (testPalindromo) {
    console.log(`${num16} es un palíndromo ya que ${num16} = ${numString}`);
} else {
    console.log(`${num16} NO es un palíndromo ya que ${num16} != ${numString}`);
}

console.groupEnd()

// 19. Verifica si una cadena de texto contiene la palabra "JavaScript"

let cadena = 'Bienvenidos al curso de JavaScript para el año 2024'
let palabra = 'JavaScript'
let testCadena = cadena.includes(palabra)

console.groupCollapsed('Ejercicio 19: ')

if (testCadena) {
    console.log(`La cadena de texto "${cadena}" contiene la palabra ${palabra}`)
} else {
    console.log(`La cadena de texto "${cadena}" NO contiene la palabra ${palabra}`)
}
console.groupEnd()

// 20. Determina si una cadena tiene más de 10 caracteres

let cadena2 = 'Bienvenido a Riwi'
let limite3 = 10
let testCadena2 = (cadena2.length > limite3)

console.groupCollapsed('Ejercicio 20: ')

if (testCadena2) {
    console.log(`La cadena "${cadena2}" tiene más de ${limite3} caracteres`)
} else {
    console.log(`La cadena "${cadena2}" NO tiene más de ${limite3} caracteres`)
}

console.groupEnd()

// 21. Verifica si una cadena de texto está en minúsculas

let cadena3 = 'minúsculas'
let cadenaMin = cadena3.toLowerCase()
let testCadena3 = (cadena3 == cadenaMin)

console.groupCollapsed('Ejercicio 21: ')

if (testCadena3) {
    console.log(`La cadena "${cadena3}" está escrita en minúsculas`)
} else {
    console.log(`La cadena "${cadena3}" NO está escrita en minúsculas`)
}

console.groupEnd()

// 22. Determina si una cadena de texto contiene al menos un número

let cadena4 = 'Html5'
let bandera

for (let i = 0; i <= cadena4.length; i += 1) {
    if (!isNaN(cadena4[i])) {
        bandera = true
        break
    }
}

console.groupCollapsed('Ejercicio 22: ')

if (bandera) {
    console.log(`La cadena ${cadena4} contiene por lo menos un número`)
} else {
    console.log(`La cadena ${cadena4} NO contiene números`)
}

console.groupEnd()

// 23. Verifica si una cadena de texto termina con un punto (.)

let cadena5 = 'Hola mundo.'
let caracter = '.'
let testCadena5 = (cadena5[(cadena5.length - 1)] == caracter)

console.groupCollapsed('Ejercicio 23: ')

if (testCadena5) {
    console.log(`La cadena "${cadena5}" termina con "${caracter}"`)
} else {
    console.log(`La cadena "${cadena5}" NO termina con "${caracter}"`)
}

console.groupEnd()

// 24. Determina si una cadena de texto es un pangrama (contiene todas las letras del alfabeto)

let cadena6 = 'abcdefghijklmnñopqrstuvwxyz'
let alfabeto = 'abcdefghijklmnñopqrstuvwxyz'.split('')
let testCadena6 = alfabeto.every(letra => cadena6.includes(letra))

console.groupCollapsed('Ejercicio 24: ')

if (testCadena6) {
    console.log(`La cadena "${cadena6}" es un pangrama`)
} else {
    console.log(`La cadena "${cadena6}" NO es un pangrama`)
}

console.groupEnd()

// 25. Verifica si un día de la semana es laborable (de lunes a viernes)

let dia = 'martes'

console.groupCollapsed('Ejercicio 25: ')

switch (dia.toLowerCase()) {
    case 'lunes':
        console.log(`El día ${dia} es laborable`)
        break
    case 'martes':
        console.log(`El día ${dia} es laborable`)
        break
    case 'miercoles':
        console.log(`El día ${dia} es laborable`)
        break
    case 'jueves':
        console.log(`El día ${dia} es laborable`)
        break
    case 'viernes':
        console.log(`El día ${dia} es laborable`)
        break
    case 'sabado':
        console.log(`El día ${dia} NO es laborable`)
        break
    case 'domingo':
        console.log(`El día ${dia} NO es laborable`)
        break
    default:
        console.log('Día de la semana no válido')
}

console.groupEnd()

// 26. Determina si un día es fin de semana (sábado o domingo)

let dia2 = 'domingo'

console.groupCollapsed('Ejercicio 26: ')

switch (dia2.toLowerCase()) {
    case 'lunes':
        console.log(`El día ${dia2} NO es fin de semana`)
        break
    case 'martes':
        console.log(`El día ${dia2} NO es fin de semana`)
        break
    case 'miercoles':
        console.log(`El día ${dia2} NO es fin de semana`)
        break
    case 'jueves':
        console.log(`El día ${dia2} NO es fin de semana`)
        break
    case 'viernes':
        console.log(`El día ${dia2} NO es fin de semana`)
        break
    case 'sabado':
        console.log(`El día ${dia2} es fin de semana`)
        break
    case 'domingo':
        console.log(`El día ${dia2} es fin de semana`)
        break
    default:
        console.log('Día de la semana no válido')
}

console.groupEnd()

// 27. Verifica si un número representa un mes válido (del 1 al 12)

let numMes = 1

console.groupCollapsed('Ejercicio 27: ')

switch (numMes) {
    case 1:
        console.log(`El número ${numMes} representa al mes de enero`)
        break
    case 2:
        console.log(`El número ${numMes} representa al mes de febrero`)
        break
    case 3:
        console.log(`El número ${numMes} representa al mes de marzo`)
        break
    case 4:
        console.log(`El número ${numMes} representa al mes de abril`)
        break
    case 5:
        console.log(`El número ${numMes} representa al mes de mayo`)
        break
    case 6:
        console.log(`El número ${numMes} representa al mes de junio`)
        break
    case 7:
        console.log(`El número ${numMes} representa al mes de julio`)
        break
    case 8:
        console.log(`El número ${numMes} representa al mes de agosto`)
        break
    case 9:
        console.log(`El número ${numMes} representa al mes de septiembre`)
        break
    case 10:
        console.log(`El número ${numMes} representa al mes de octubre`)
        break
    case 11:
        console.log(`El número ${numMes} representa al mes de noviembre`)
        break
    case 12:
        console.log(`El número ${numMes} representa al mes de diciembre`)
        break
    default:
        console.log(`El número ${numMes} NO representa ningún mes del año`)
}

console.groupEnd()

// 28. Determina si una hora está en el rango de 9 AM a 6 PM

let hora = 15
let horaInicial = 9
let horaFinal = 18
let testHora = ((hora >= horaInicial) && (hora <= horaFinal))

console.groupCollapsed('Ejercicio 28: ')

if (testHora) {
    console.log(`Las ${hora} horas se encuentran en el rango entre las (${horaInicial} - ${horaFinal})`)
} else {
    console.log(`Las ${hora} horas NO se encuentran en el rango entre las (${horaInicial} - ${horaFinal})`)
}

console.groupEnd()

// 29. Verifica si una persona es mayor de 65 años o menor de 18 años

let edad = 35
let limiteInf3 = 18
let limiteSup3 = 65

console.groupCollapsed('Ejercicio 29: ')

if (((edad > limiteSup3) && (edad >= 0)) || (edad < limiteInf3) && (edad >= 0)) {
    console.log(`Tienes ${edad} años, tienes menos de ${limiteInf3} o más de ${limiteSup3})`)
} else {
    console.log(`Tienes ${edad} años, estás en el rango de (${limiteInf3}, ${limiteSup3})`)
}

console.groupEnd()

// 30. Determina si un triángulo es equilátero (tres lados iguales)

let lado1 = 10
let lado2 = 10
let lado3 = 10
let equilatero = ((lado1 == lado2) && (lado1 == lado3) && (lado2 == lado3))

console.groupCollapsed('Ejercicio 30: ')

if (equilatero) {
    console.log(`El triángulo es equilátero porque todos sus lados miden ${lado1}`)
} else {
    console.log('No es un triángulo equilátero')
}

console.groupEnd()

// 31. Verifica si un triángulo es isósceles (dos lados iguales)

let lado4 = 10
let lado5 = 10
let lado6 = 10
let isosceles = ((lado4 == lado5) && (lado4 != lado6))

console.groupCollapsed('Ejercicio 31: ')

if (isosceles) {
    console.log('Es un triángulo isósceles')
} else {
    console.log('No es un triángulo isósceles')
}

console.groupEnd()

// 32. Determina si un triángulo es escaleno (todos los lados diferentes)

let lado7 = 10
let lado8 = 20
let lado9 = 30
let escaleno = ((lado7 != lado8) && (lado7 != lado9) && (lado8 != lado9))

console.groupCollapsed('Ejercicio 32: ')

if (escaleno) {
    console.log('Es un triángulo escaleno')
} else {
    console.log('No es un triángulo escaleno')
}

console.groupEnd()

// 33. Verifica si un número es mayor que el doble de otro número

let num17 = 10
let num18 = 4
let numDouble = num18 * 2
let testNum17 = (num17 > numDouble)

console.groupCollapsed('Ejercicio 33: ')

if (testNum17) {
    console.log(`${num17} es mayor que el doble de ${num18} - "(${numDouble})"`)
}

console.groupEnd()

// 34. Determina si la suma de dos números es mayor que 100

let num19 = 50
let num20 = 60
let limiteSuma = 100
let suma = num19 + num20
let testSuma = (suma > limiteSuma)

console.groupCollapsed('Ejercicio 34: ')

if (testSuma) {
    console.log(`La suma es mayor a ${limiteSuma}. (${num19} + ${num20} = ${suma})`)
} else {
    console.log(`La suma es menor a ${limiteSuma}. (${num19} + ${num20} = ${suma})`)
}

console.groupEnd()

// 35. Verifica si la resta de dos números es menor que 50

let num21 = 100
let num22 = 60
let limiteDiferencia = 50
let diferencia = num21 - num22
let testDiferencia = (diferencia < limiteDiferencia)

console.groupCollapsed('Ejercicio 35: ')

if (testDiferencia) {
    console.log(`La resta es menor a ${limiteDiferencia}. (${num21} - ${num22} = ${diferencia})`)
} else {
    console.log(`La resta es mayor a ${limiteDiferencia}. (${num21} - ${num22} = ${diferencia})`)
}

console.groupEnd()

// 36. Determina si un número es el doble del otro número

let num23 = 8
let num24 = 4
let numDouble2 = num24 * 2
let testNum23 = (num23 == numDouble2)

console.groupCollapsed('Ejercicio 36: ')

if (testNum23) {
    console.log(`${num23} es el doble de ${num24}`)
} else {
    console.log(`${num23} NO es el doble de ${num24}`)
}

console.groupEnd()

// 37. Verifica si el doble de un número es igual al triple de otro número

let num25 = 6
let num26 = 4
let numDouble3 = num25 * 2
let numTriple = num26 * 3
let testNum = (numDouble3 == numTriple)

console.groupCollapsed('Ejercicio 37: ')

if (testNum23) {
    console.log(`El doble de ${num25} es el triple de ${num26}. (${num25} * 2 = ${num26} * 3)`)
} else {
    console.log(`El doble de ${num25} NO es el triple de ${num26}. (${num25} * 2 != ${num26} * 3)`)
}

console.groupEnd()

// 38. Determina si la suma de dos números es igual a 50

let num27 = 23
let num28 = 27
let condicionSumas = 50
let suma2 = num27 + num28
let testSuma2 = (suma2 == condicionSumas)

console.groupCollapsed('Ejercicio 38: ')

if (testSuma2) {
    console.log(`El total de la suma es igual a ${condicionSumas}. (${num27} + ${num28} = ${suma2})`)
} else {
    console.log(`El total de la suma es diferente a ${condicionSumas}. (${num27} + ${num28} = ${suma2})`)
}

console.groupEnd()

// 39. Verifica si el producto de dos números es mayor que 500 

let num29 = 50
let num30 = 60
let limiteProducto = 500
let producto = num29 * num30
let testProducto = (producto > limiteProducto)

console.groupCollapsed('Ejercicio 39: ')

if (testSuma) {
    console.log(`El producto es mayor a ${limiteProducto}. (${num29} * ${num30} = ${producto})`)
} else {
    console.log(`El producto es menor a ${limiteProducto}. (${num29} * ${num30} = ${producto})`)
}

console.groupEnd()

// 40. Determina si la división de dos números es menor que 10

let num31 = 100
let num32 = 20
let limiteCociente = 10
let cociente = num31 / num32
let testCociente = (cociente < limiteCociente)

console.groupCollapsed('Ejercicio 40: ')

if (testSuma) {
    console.log(`El cociente es menor a ${limiteCociente}. (${num31} / ${num32} = ${cociente})`)
} else {
    console.log(`El cociente es mayor a ${limiteCociente}. (${num31} / ${num32} = ${cociente})`)
}

console.groupEnd()