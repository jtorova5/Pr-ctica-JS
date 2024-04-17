
// 1. Sumar dos números

let num1 = 2321
let num2 = 5425
let total = num1 + num2

console.groupCollapsed('Ejercicio 1: ')
console.log(`${num1} + ${num2} = ${total}`)
console.groupEnd()

// 2. Restar dos números

let diferencia = num2 - num1

console.groupCollapsed('Ejercicio 2: ')
console.log(`${num2} - ${num1} = ${diferencia}`)
console.groupEnd()

// 3. Multiplicar dos números

let producto = Math.round(num1 * num2)

console.groupCollapsed('Ejercicio 3: ')
console.log(`${num1} * ${num2} = ${producto}`)
console.groupEnd()

// 4. Dividir dos números

let cociente = (num1 / num2).toFixed(2)

console.groupCollapsed('Ejercicio 4: ')
console.log(`${num1} / ${num2} = ${cociente}`)
console.groupEnd()

// 5. Calcular el módulo (resto) de una división

let resto = (10 % 2)

console.groupCollapsed('Ejercicio 5: ')
console.log(`10 MOD 2 = ${resto}`)
console.groupEnd()

// 6. Generar un número aleatorio entre 1 y 10

let random = Math.round(Math.random() * 10)

console.groupCollapsed('Ejercicio 6: ')
console.log(`Número aleatorio entre 1 y 10: ${random}`)
console.groupEnd()

// 7. Elevar un número a la potencia de otro

let potencia = Math.pow(10, 2)
let potenciaDePotencia = Math.pow(potencia, 3)

console.groupCollapsed('Ejercicio 7: ')
console.log(`10²*³ = ${potenciaDePotencia}`)
console.groupEnd()

// 8. Calcular la raíz cuadrada de un número

let raiz = Math.sqrt(16)

console.groupCollapsed('Ejercicio 8: ')
console.log(`La raíz cuadrada de 16 es: ${raiz}`)
console.groupEnd()

// 9. Convertir grados Celsius a Fahrenheit

let cel = 10
let conversion = (cel * 9/5) + 32

console.groupCollapsed('Ejercicio 9: ')
console.log(`${cel} °C equivalen a: ${conversion} °F`)
console.groupEnd()

// 10. Calcular el área de un círculo

let radio = 10
let area = (Math.PI*Math.pow(radio, 2)).toFixed(2)

console.groupCollapsed('Ejercicio 10: ')
console.log(`El área de un círculo de radio ${radio} es: ${area}`)
console.groupEnd()

// 11. Calcular el perímetro de un cuadrado

let lado = 10
let perimetro = lado * 4

console.groupCollapsed('Ejercicio 11: ')
console.log(`El perímetro de un cuadrado de lado ${lado} es: ${perimetro}`)
console.groupEnd()

// 12. Calcular el volumen de una esfera

let radioEsfera = 10
let volumen = (4/3 * Math.PI * Math.pow(radioEsfera, 3)).toFixed(2)

console.groupCollapsed('Ejercicio 12: ')
console.log(`El volumen de una esfera de radio ${radioEsfera} es: ${volumen}`)
console.groupEnd()

// 13. Calcular el área de un triángulo

let base = 5
let altura = 10
let areaTriangulo = (base * altura) / 2

console.groupCollapsed('Ejercicio 13: ')
console.log(`El área de un triangulo con base ${base} y altura ${altura} es: ${areaTriangulo}`)
console.groupEnd()

// 14. Generar la tabla de multiplicar del número 5

let factor = 5

console.groupCollapsed('Ejercicio 14: ')
for (let i = 0; i <= 10; i += 1) {
    console.log(`${factor} * ${i} = ${factor * i}`)
}
console.groupEnd()

// 15. Encontrar el número mayor entre 3, 7 y 2

let numeros = [3, 7, 2]
let mayor = Math.max.apply(null, numeros)

console.groupCollapsed('Ejercicio 15: ')
console.log(`De la lista [${numeros}] el número mayor es: ${mayor}`)
console.groupEnd()