
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

// 16. Encontrar el número menor entre 10, 20 y 5

let numeros2 = [10, 20, 5]
let menor = Math.min.apply(null, numeros2)

console.groupCollapsed('Ejercicio 16: ')
console.log(`De la lista [${numeros2}] el número menor es: ${menor}`)
console.groupEnd()

// 17. Calcular el promedio de 4, 6 y 8

let prom = (4 + 6 + 8) / 3

console.groupCollapsed('Ejercicio 17: ')
console.log(`El promedio de (4, 6 y 8) es: ${prom}`)
console.groupEnd()

// 18. Calcular la factorial de 5

let num = 5
let fact = 1

for(let i = num; i >= 1; i -= 1) {
     fact *= i
}

console.groupCollapsed('Ejercicio 18: ')
console.log(`El factorial de ${num} es: ${fact}`)
console.groupEnd()

// 19. Redondear el número 3.6

let numToRound = 3.6
let numRounded = Math.round(numToRound)

console.groupCollapsed('Ejercicio 19: ')
console.log(`El número ${numToRound} redondeado, queda: ${numRounded}`)
console.groupEnd()

// 20. Calcular el doble de 9

let numToDouble = 9
let double = numToDouble * 2

console.groupCollapsed('Ejercicio 20: ')
console.log(`El número ${numToDouble} doblado, es: ${double}`)
console.groupEnd()

// 21. Calcular el triple de 4

let numToTriple = 4
let triple = numToTriple * 3

console.groupCollapsed('Ejercicio 21: ')
console.log(`El número ${numToTriple} triplicado, es: ${triple}`)
console.groupEnd()

// 22. Calcular el cuadrado de 6

let sqr = 6
let numSqrd = 6 ** 2

console.groupCollapsed('Ejercicio 22: ')
console.log(`El cuadrado de ${sqr} es: ${numSqrd}`)
console.groupEnd()

// 23. Calcular el cubo de 3

let cube = 3
let cubicNum = cube ** 3

console.groupCollapsed('Ejercicio 23: ')
console.log(`El cubo de ${cube} es: ${cubicNum}`)
console.groupEnd()

// 24. Calcular la suma de los primeros 10 números naturales

let limit = 10
let sum = 0

for(let i = 1; i <= limit; i += 1) {
    sum += i
}

console.groupCollapsed('Ejercicio 24: ')
console.log(`La suma de los primeros ${limit} números naturales es: ${sum}`)
console.groupEnd()

// 25. Calcular la resta entre 50 y 25

let num3 = 50
let num4 = 25
let dif = num3 -num4

console.groupCollapsed('Ejercicio 25: ')
console.log(`${num3} - ${num4} = ${dif}`)
console.groupEnd()

// 26. Multiplicar 7 por 9

let num5 = 7
let num6 = 9
let mult = num5 * num6

console.groupCollapsed('Ejercicio 26: ')
console.log(`${num5} * ${num6} = ${mult}`)
console.groupEnd()

// 27. Dividir 144 por 12

let num7 = 144
let num8 = 12
let div = num7 / num8

console.groupCollapsed('Ejercicio 27: ')
console.log(`${num7} / ${num8} = ${div}`)
console.groupEnd()

// 28. Obtener el módulo de 17 dividido por 4

let num9 = 17
let num10 = 4
let mod = num9 % num10

console.groupCollapsed('Ejercicio 28: ')
console.log(`${num9} / ${num10} = ${mod}`)
console.groupEnd()

// 29. Generar un número aleatorio entre 20 y 30

let random2 = Math.round(Math.random() * (30-20) + 20)

console.groupCollapsed('Ejercicio 29: ')
console.log(`Número aleatorio = ${random2}`)
console.groupEnd()

// 30. Elevar 2 a la potencia de 8

let base2 = 2
let exp = 8
let potencia2 = base2 ** exp

console.groupCollapsed('Ejercicio 30: ')
console.log(`${base2} ^ ${exp} = ${potencia2}`)
console.groupEnd()

// 31. Calcular la raíz cuadrada de 144

let base3 = 144
let raizCuadrada = Math.sqrt(base3)

console.groupCollapsed('Ejercicio 31: ')
console.log(`${base3} ^ (1/2) = ${raizCuadrada}`)
console.groupEnd()

// 32. Convertir 100 grados Celsius a Fahrenheit

let cel2 = 100
let conversion2 = (cel2 * 9/5) + 32

console.groupCollapsed('Ejercicio 32: ')
console.log(`${cel2} °C equivalen a: ${conversion2} °F`)
console.groupEnd()

// 33. Calcular el área de un rectángulo de base 5 y altura 10

let base4 = 5
let altura2 = 10
let areaTriangulo2 = (base4 * altura2) / 2

console.groupCollapsed('Ejercicio 33: ')
console.log(`El área de un triangulo con base ${base4} y altura ${altura2} es: ${areaTriangulo2}`)
console.groupEnd()

// 34. Calcular el perímetro de un círculo con radio 6

let radio2 = 6
let perimetro2 = (2 * Math.PI * radio2).toFixed(2)

console.groupCollapsed('Ejercicio 34: ')
console.log(`El perímetro de un círculo de radio ${radio2} es: ${perimetro2}`)
console.groupEnd()

// 35. Calcular el volumen de un cubo con lado 4

let lado2 = 4
let volumen2 = lado2 ** 3

console.groupCollapsed('Ejercicio 35: ')
console.log(`El volumen de un cubo de lado ${lado2} es: ${volumen2}`)
console.groupEnd()

// 36. Calcular el área de un rombo con diagonales de 8 y 10

let diagonalMayor = 10
let diagonalMenor = 8
let areaRombo = (diagonalMayor * diagonalMenor) / 2

console.groupCollapsed('Ejercicio 36: ')
console.log(`El área de un rombo con diagonales de ${diagonalMenor} y ${diagonalMayor} es: ${areaRombo}`)
console.groupEnd()

// 37. Calcular el área de un trapecio con bases 6 y 10 y altura 4

let baseMayor = 10
let baseMenor = 6
let altura3 = 4
let areaTrapecio = ((baseMayor + baseMenor) / 2) * altura3

console.groupCollapsed('Ejercicio 37: ')
console.log(`El área de un trapecio de bases ${baseMenor} y ${baseMayor} y altura ${altura3} es: ${areaTrapecio}`)
console.groupEnd()

// 38. Generar la tabla de multiplicar del número 8

let factor2 = 8

console.groupCollapsed('Ejercicio 38: ')
for (let i = 0; i <= 10; i += 1) {
    console.log(`${factor2} * ${i} = ${factor2 * i}`)
}
console.groupEnd()

// 39. Encontrar el número mayor entre 15, 20 y 25

let numeros3 = [15, 20, 25]
let mayor2 = Math.max.apply(null, numeros3)

console.groupCollapsed('Ejercicio 39: ')
console.log(`De la lista [${numeros3}] el número mayor es: ${mayor2}`)
console.groupEnd()

// 40. Encontrar el número menor entre 50, 75 y 100

let numeros4 = [50, 75, 100]
let menor2 = Math.min.apply(null, numeros4)

console.groupCollapsed('Ejercicio 40: ')
console.log(`De la lista [${numeros4}] el número menor es: ${menor2}`)
console.groupEnd()

// 41. Calcular el promedio de 7, 9 y 12

let prom2 = ((7 + 9 + 12) / 3).toFixed(2)

console.groupCollapsed('Ejercicio 41: ')
console.log(`El promedio de (7, 9 y 12) es: ${prom2}`)
console.groupEnd()

// 42. Calcular la factorial de 7

let num11 = 7
let fact2 = 1

for(let i = num11; i >= 1; i -= 1) {
    fact2 *= i
}

console.groupCollapsed('Ejercicio 42: ')
console.log(`El factorial de ${num11} es: ${fact2}`)
console.groupEnd()

// 43. Redondear el número 7.9

let numToRound2 = 7.9
let numRounded2 = Math.round(numToRound2)

console.groupCollapsed('Ejercicio 43: ')
console.log(`El número ${numToRound2} redondeado, queda: ${numRounded2}`)
console.groupEnd()

// 44. Calcular el doble de 15

let numToDouble2 = 15
let double2 = numToDouble2 * 2

console.groupCollapsed('Ejercicio 44: ')
console.log(`El número ${numToDouble2} doblado, es: ${double2}`)
console.groupEnd()

// 45. Calcular el triple de 6

let numToTriple2 = 6
let triple2 = numToTriple2 * 3

console.groupCollapsed('Ejercicio 45: ')
console.log(`El número ${numToTriple2} triplicado, es: ${triple2}`)
console.groupEnd()

// 46. Calcular el cuadrado de 8

let base5 = 8
let exp2 = 2
let potencia3 = base5 ** exp2

console.groupCollapsed('Ejercicio 46: ')
console.log(`${base5} ^ ${exp2} = ${potencia3}`)
console.groupEnd()

// 47. Calcular el cubo de 4

let base6 = 4
let exp3 = 3
let potencia4 = base6 ** exp3

console.groupCollapsed('Ejercicio 47: ')
console.log(`${base6} ^ ${exp3} = ${potencia4}`)
console.groupEnd()

// 48. Calcular la suma de los primeros 15 números naturales

let limit2 = 15
let sum2 = 0

for(let i = 1; i <= limit2; i += 1) {
    sum2 += i
}

console.groupCollapsed('Ejercicio 48: ')
console.log(`La suma de los primeros ${limit2} números naturales es: ${sum2}`)
console.groupEnd()

// 49. Calcular la resta entre 100 y 55

let num12 = 50
let num13 = 25
let dif2 = num12 -num13

console.groupCollapsed('Ejercicio 49: ')
console.log(`${num12} - ${num13} = ${dif2}`)
console.groupEnd()

// 50. Multiplicar 6 por 8

let num14 = 6
let num15 = 8

let producto2 = Math.round(num14 * num15)

console.groupCollapsed('Ejercicio 50: ')
console.log(`${num14} * ${num15} = ${producto2}`)
console.groupEnd()

// 51. Dividir 225 por 15

let num16 = 225
let num17 = 15
let div2 = num16 / num17

console.groupCollapsed('Ejercicio 51: ')
console.log(`${num16} / ${num17} = ${div2}`)
console.groupEnd()

// 52. Obtener el módulo de 20 dividido por 7

let num18 = 20
let num19 = 7
let mod2 = num18 % num19

console.groupCollapsed('Ejercicio 28: ')
console.log(`${num18} / ${num19} = ${mod2}`)
console.groupEnd()

// 53. Generar un número aleatorio entre 40 y 50

let random3 = Math.round(Math.random() * (50-40) + 40)

console.groupCollapsed('Ejercicio 53: ')
console.log(`Número aleatorio = ${random3}`)
console.groupEnd()

// 54. Elevar 3 a la potencia de 4

let base7 = 3
let exp4 = 4
let potencia5 = base7 ** exp4

console.groupCollapsed('Ejercicio 54: ')
console.log(`${base7} ^ ${exp4} = ${potencia5}`)
console.groupEnd()

// 55. Calcular la raíz cuadrada de 169

let base8 = 169
let raizCuadrada2 = Math.sqrt(base8)

console.groupCollapsed('Ejercicio 55: ')
console.log(`${base8} ^ (1/2) = ${raizCuadrada2}`)
console.groupEnd()

// 56. Convertir 80 grados Celsius a Fahrenheit

let cel3 = 80
let conversion3 = (cel3 * 9/5) + 32

console.groupCollapsed('Ejercicio 56: ')
console.log(`${cel3} °C equivalen a: ${conversion3} °F`)
console.groupEnd()

// 57. Calcular el área de un rectángulo de base 8 y altura 12

let base9 = 8
let altura4 = 12
let areaTriangulo3 = (base9 * altura4) / 2

console.groupCollapsed('Ejercicio 57: ')
console.log(`El área de un triangulo con base ${base9} y altura ${altura4} es: ${areaTriangulo3}`)
console.groupEnd()

// 58. Calcular el perímetro de un círculo con radio 8

let radio3 = 8
let perimetro3 = (2 * Math.PI * radio3).toFixed(2)

console.groupCollapsed('Ejercicio 58: ')
console.log(`El perímetro de un círculo de radio ${radio3} es: ${perimetro3}`)
console.groupEnd()

// 59. Calcular el volumen de un cubo con lado 5

let lado3 = 5
let volumen3 = lado3 ** 3

console.groupCollapsed('Ejercicio 59: ')
console.log(`El volumen de un cubo de lado ${lado3} es: ${volumen3}`)
console.groupEnd()

// 60. Calcular el área de un rombo con diagonales de 12 y 16

let diagonalMayor2 = 16
let diagonalMenor2 = 12
let areaRombo2 = (diagonalMayor2 * diagonalMenor2) / 2

console.groupCollapsed('Ejercicio 60: ')
console.log(`El área de un rombo con diagonales de ${diagonalMenor2} y ${diagonalMayor2} es: ${areaRombo2}`)
console.groupEnd()

// 61. Calcular el área de un trapecio con bases 8 y 12 y altura 6

let baseMayor2 = 12
let baseMenor2 = 8
let altura5 = 6
let areaTrapecio2 = ((baseMayor2 + baseMenor2) / 2) * altura5

console.groupCollapsed('Ejercicio 61: ')
console.log(`El área de un trapecio de bases ${baseMenor2} y ${baseMayor2} y altura ${altura5} es: ${areaTrapecio2}`)
console.groupEnd()

// 62. Generar la tabla de multiplicar del número 9

let factor3 = 9

console.groupCollapsed('Ejercicio 62: ')
for (let i = 0; i <= 10; i += 1) {
    console.log(`${factor3} * ${i} = ${factor3 * i}`)
}
console.groupEnd()

// 63. Encontrar el número mayor entre 25, 30 y 35

let numeros5 = [25, 30, 35]
let mayor3 = Math.max.apply(null, numeros5)

console.groupCollapsed('Ejercicio 63: ')
console.log(`De la lista [${numeros5}] el número mayor es: ${mayor3}`)
console.groupEnd()

// 64. Encontrar el número menor entre 80, 95 y 110

let numeros6 = [25, 30, 35]
let menor3 = Math.min.apply(null, numeros6)

console.groupCollapsed('Ejercicio 64: ')
console.log(`De la lista [${numeros6}] el número menor es: ${menor3}`)
console.groupEnd()

// 65. Calcular el promedio de 8, 10 y 14

let prom3 = ((8 + 10 + 14) / 3).toFixed(2)

console.groupCollapsed('Ejercicio 65: ')
console.log(`El promedio de (8, 10 y 14) es: ${prom3}`)
console.groupEnd()

// 66. Calcular el factorial de 8

let num20 = 8
let fact3 = 1

for(let i = num20; i >= 1; i -= 1) {
    fact3 *= i
}

console.groupCollapsed('Ejercicio 66: ')
console.log(`El factorial de ${num20} es: ${fact3}`)
console.groupEnd()

// 67. Redondear el número 9.2

let numToRound3 = 9.2
let numRounded3 = Math.round(numToRound3)

console.groupCollapsed('Ejercicio 67: ')
console.log(`El número ${numToRound3} redondeado, queda: ${numRounded3}`)
console.groupEnd()

// 68. Calcular el doble de 18

let numToDouble3 = 18
let double3 = numToDouble3 * 2

console.groupCollapsed('Ejercicio 68: ')
console.log(`El número ${numToDouble3} doblado, es: ${double3}`)
console.groupEnd()

// 69. Calcular el triple de 7

let numToTriple3 = 7
let triple3 = numToTriple3 * 3

console.groupCollapsed('Ejercicio 69: ')
console.log(`El número ${numToTriple3} triplicado, es: ${triple3}`)
console.groupEnd()

// 70. Calcular el cuadrado de 10

let base10 = 10
let exp5 = 2
let potencia6 = base10 ** exp5

console.groupCollapsed('Ejercicio 70: ')
console.log(`${base10} ^ ${exp5} = ${potencia6}`)
console.groupEnd()

// 71. Calcular el cubo de 5

let cube2 = 3
let cubicNum2 = cube2 ** 3

console.groupCollapsed('Ejercicio 71: ')
console.log(`El cubo de ${cube2} es: ${cubicNum2}`)
console.groupEnd()

// 72. Calcular la suma de los primeros 20 números naturales

let limit3 = 20
let sum3 = 0

for(let i = 1; i <= limit3; i += 1) {
    sum3 += i
}

console.groupCollapsed('Ejercicio 72: ')
console.log(`La suma de los primeros ${limit3} números naturales es: ${sum3}`)
console.groupEnd()

// 73. Calcular la resta entre 200 y 75

let num21 = 200
let num22 = 75
let dif3 = num21 -num22

console.groupCollapsed('Ejercicio 73: ')
console.log(`${num21} - ${num22} = ${dif3}`)
console.groupEnd()

// 74. Multiplicar 9 por 11

let num23 = 9
let num24 = 11

let producto3 = Math.round(num23 * num24)

console.groupCollapsed('Ejercicio 74: ')
console.log(`${num23} * ${num24} = ${producto3}`)
console.groupEnd()

// 75. Dividir 300 por 25

let num25 = 225
let num26 = 15
let div3 = num16 / num17

console.groupCollapsed('Ejercicio 75: ')
console.log(`${num25} / ${num26} = ${div3}`)
console.groupEnd()

// 76. Obtener el módulo de 30 dividido por 9

let num27 = 20
let num28 = 7
let mod3 = num27 % num28

console.groupCollapsed('Ejercicio 76: ')
console.log(`${num27} / ${num28} = ${mod3}`)
console.groupEnd()

// 77. Generar un número aleatorio entre 60 y 70

let random4 = Math.round(Math.random() * (70-60) + 60)

console.groupCollapsed('Ejercicio 77: ')
console.log(`Número aleatorio = ${random4}`)
console.groupEnd()

// 78. Elevar 4 a la potencia de 5

let base11 = 4
let exp6 = 5
let potencia7 = base11 ** exp6

console.groupCollapsed('Ejercicio 78: ')
console.log(`${base11} ^ ${exp6} = ${potencia7}`)
console.groupEnd()

// 79. Calcular la raíz cuadrada de 196

let base12 = 196
let raizCuadrada3 = Math.sqrt(base12)

console.groupCollapsed('Ejercicio 79: ')
console.log(`${base12} ^ (1/2) = ${raizCuadrada3}`)
console.groupEnd()

// 80. Convertir 120 grados Celsius a Fahrenheit

let cel4 = 120
let conversion4 = (cel4 * 9/5) + 32

console.groupCollapsed('Ejercicio 80: ')
console.log(`${cel4} °C equivalen a: ${conversion4} °F`)
console.groupEnd()

// 81. Calcular el área de un rectángulo de base 10 y altura 15

let base13 = 10
let altura6 = 15
let areaTriangulo4 = (base13 * altura6) / 2

console.groupCollapsed('Ejercicio 81: ')
console.log(`El área de un triangulo con base ${base13} y altura ${altura6} es: ${areaTriangulo4}`)
console.groupEnd()

// 82. Calcular el perímetro de un círculo con radio 10

let radio4 = 10
let perimetro4 = (2 * Math.PI * radio4).toFixed(2)

console.groupCollapsed('Ejercicio 82: ')
console.log(`El perímetro de un círculo de radio ${radio4} es: ${perimetro4}`)
console.groupEnd()

// 83. Calcular el volumen de un cubo con lado 6

let lado4 = 6
let volumen4 = lado4 ** 3

console.groupCollapsed('Ejercicio 83: ')
console.log(`El volumen de un cubo de lado ${lado4} es: ${volumen4}`)
console.groupEnd()

// 84. Calcular el área de un rombo con diagonales de 14 y 18

let diagonalMayor3 = 18
let diagonalMenor3 = 114
let areaRombo3 = (diagonalMayor3 * diagonalMenor3) / 2

console.groupCollapsed('Ejercicio 84: ')
console.log(`El área de un rombo con diagonales de ${diagonalMenor3} y ${diagonalMayor3} es: ${areaRombo3}`)
console.groupEnd()

// 85. Calcular el área de un trapecio con bases 10 y 15 y altura 8

let baseMayor3 = 15
let baseMenor3 = 10
let altura7 = 8
let areaTrapecio3 = ((baseMayor3 + baseMenor3) / 2) * altura7

console.groupCollapsed('Ejercicio 85: ')
console.log(`El área de un trapecio de bases ${baseMenor3} y ${baseMayor3} y altura ${altura7} es: ${areaTrapecio3}`)
console.groupEnd()

// 86. Generar la tabla de multiplicar del número 10

let factor4 = 10

console.groupCollapsed('Ejercicio 86: ')
for (let i = 0; i <= 10; i += 1) {
    console.log(`${factor4} * ${i} = ${factor4 * i}`)
}
console.groupEnd()

// 87. Encontrar el número mayor entre 35, 40 y 45

let numeros7 = [35, 40, 45]
let mayor4 = Math.max.apply(null, numeros7)

console.groupCollapsed('Ejercicio 87: ')
console.log(`De la lista [${numeros7}] el número mayor es: ${mayor4}`)
console.groupEnd()

// 88. Encontrar el número menor entre 90, 105 y 120

let numeros8 = [90, 105, 120]
let menor4 = Math.min.apply(null, numeros8)

console.groupCollapsed('Ejercicio 88: ')
console.log(`De la lista [${numeros8}] el número mayor es: ${menor4}`)
console.groupEnd()

// 89. Calcular el promedio de 9, 11 y 15

let prom4 = ((8 + 10 + 14) / 3).toFixed(2)

console.groupCollapsed('Ejercicio 89: ')
console.log(`El promedio de (8, 10 y 14) es: ${prom4}`)
console.groupEnd()

// 90. Calcular la factorial de 9

let num29 = 9
let fact4 = 1

for(let i = num29; i >= 1; i -= 1) {
    fact4 *= i
}

console.groupCollapsed('Ejercicio 90: ')
console.log(`El factorial de ${num29} es: ${fact4}`)
console.groupEnd()

// 91. Redondear el número 10.8

let numToRound4 = 10.8
let numRounded4 = Math.round(numToRound4)

console.groupCollapsed('Ejercicio 91: ')
console.log(`El número ${numToRound4} redondeado, queda: ${numRounded4}`)
console.groupEnd()

// 92. Calcular el doble de 21

let numToDouble4 = 21
let double4 = numToDouble4 * 2

console.groupCollapsed('Ejercicio 92: ')
console.log(`El número ${numToDouble4} doblado, es: ${double4}`)
console.groupEnd()

// 93. Calcular el triple de 8

let numToTriple4 = 8
let triple4 = numToTriple4 * 3

console.groupCollapsed('Ejercicio 93: ')
console.log(`El número ${numToTriple4} triplicado, es: ${triple4}`)
console.groupEnd()

// 94. Calcular el cuadrado de 12

let base14 = 12
let exp7 = 2
let potencia8 = base14 ** exp7

console.groupCollapsed('Ejercicio 94: ')
console.log(`${base14} ^ ${exp7} = ${potencia8}`)
console.groupEnd()

// 95. Calcular el cubo de 6

let cube3 = 6
let cubicNum3 = cube3 ** 3

console.groupCollapsed('Ejercicio 95: ')
console.log(`El cubo de ${cube3} es: ${cubicNum3}`)
console.groupEnd()

// 96.  Calcular la suma de los primeros 25 números naturales

let limit4 = 25
let sum4 = 0

for(let i = 1; i <= limit4; i += 1) {
    sum4 += i
}

console.groupCollapsed('Ejercicio 96: ')
console.log(`La suma de los primeros ${limit4} números naturales es: ${sum4}`)
console.groupEnd()