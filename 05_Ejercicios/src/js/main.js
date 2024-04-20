
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
let testBisiesto = ((año % 4 ==  0) || ((año %  100 == 0) && (año % 400 == 0)))

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

if (num12 >= test2) {
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

// 17. Verifica si un número es una potencia de 2. 

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

// 18. Determina si un número es un palíndromo. 

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

// 19. Verifica si una cadena de texto contiene la palabra "JavaScript". 

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

// 20. Determina si una cadena tiene más de 10 caracteres. 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 21. Verifica si una cadena de texto está en minúsculas. 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 22. Determina si una cadena de texto contiene al menos un número. 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 23. Verifica si una cadena de texto termina con un punto (.). 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 24. Determina si una cadena de texto es un pangrama (contiene todas las letras del alfabeto). 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 25. Verifica si un día de la semana es laborable (de lunes a viernes). 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 26. Determina si un día es fin de semana (sábado o domingo). 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 27. Verifica si un número representa un mes válido (del 1 al 12). 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 28. Determina si una hora está en el rango de 9 AM a 6 PM. 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 29. Verifica si una persona es mayor de 65 años o menor de 18 años. 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 30. Determina si un triángulo es equilátero (tres lados iguales). 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 31. Verifica si un triángulo es isósceles (dos lados iguales). 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 32. Determina si un triángulo es escaleno (todos los lados diferentes). 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 33. Verifica si un número es mayor que el doble de otro número. 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 34. Determina si la suma de dos números es mayor que 100.

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 35. Verifica si la resta de dos números es menor que 50. 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 36. Determina si un número es el doble del otro número. 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 37. Verifica si el doble de un número es igual al triple de otro número. 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 38. Determina si la suma de dos números es igual a 50. 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 39. Verifica si el producto de dos números es mayor que 500. 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()
// 40. Determina si la división de dos números es menor que 10. 

console.groupCollapsed('Ejercicio 1: ')
console.groupEnd()