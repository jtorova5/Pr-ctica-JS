
// 1. ¿Es 35 mayor que 25?

let num1 = 35
let num2 = 25

console.groupCollapsed('Ejercicio 1: ')
console.log(`${num1} > ${num2} = ${num1 > num2}`)
console.groupEnd()

// 2. ¿Es 45 menor que 30?

let num3 = 45
let num4 = 30

console.groupCollapsed('Ejercicio 2: ')
console.log(`${num3} < ${num4} = ${num3 < num4}`)
console.groupEnd()

// 3. ¿Son 50 y "50" iguales?

let num5 = 50
let num6 = '50'

console.groupCollapsed('Ejercicio 3: ')
console.log(`${num5} == ${num6} = ${num5 == num6}`)
console.groupEnd()

// 4. ¿Es 40 estrictamente igual a 40 convertido a número? 

let num7 = 40
let num8 = Number(40)

console.groupCollapsed('Ejercicio 4: ')
console.log(`${num7} === ${num8} = ${num7 === num8}`)
console.groupEnd()

// 5. ¿Son "apple" y "orange" diferentes?

let num9 = 'apple'
let num10 = 'orange'

console.groupCollapsed('Ejercicio 5: ')
console.log(`${num9} != ${num10} = ${num9 != num10}`)
console.groupEnd()

// 6. ¿Es "apple" estrictamente diferente de "Apple"?

let num11 = 'apple'
let num12 = 'Apple'

console.groupCollapsed('Ejercicio 6: ')
console.log(`${num11} !== ${num12} = ${num11 !== num12}`)
console.groupEnd()

// 7. ¿Cuál es el valor de una variable sin definir?

let variable

console.groupCollapsed('Ejercicio 7: ')
console.log(`El valor de una variable sin definir es: ${variable}`)
console.groupEnd()

// 8. ¿Cuál es el tipo de dato de una variable sin definir?

let tipoDato = typeof(variable)

console.groupCollapsed('Ejercicio 8: ')
console.log(`El tipo de dato de una variable sin definir es: ${tipoDato}`)
console.groupEnd()

// 9. ¿Es null igual a undefined? 

let datoNull = null
let datoUndefined = undefined

console.groupCollapsed('Ejercicio 9: ')
console.log(`${datoNull} == ${datoUndefined} = ${datoNull == datoUndefined}`)
console.groupEnd()

// 10. ¿Son null y undefined estrictamente iguales?

console.groupCollapsed('Ejercicio 10: ')
console.log(`${datoNull} === ${datoUndefined} = ${datoNull === datoUndefined}`)
console.groupEnd()

// 11. ¿Es "2.75" mayor que 2.5?

let num13 = '2.75'
let num14 = 2.5

console.groupCollapsed('Ejercicio 11: ')
console.log(`${num13} > ${num14} = ${num13 > num14}`)
console.groupEnd()

// 12. ¿Es "2.75" mayor que 2.75? 

let num15 = '2.75'
let num16 = 2.75

console.groupCollapsed('Ejercicio 12: ')
console.log(`${num15} > ${num16} = ${num15 > num16}`)
console.groupEnd()

// 13. ¿Es "2.75" mayor o igual a 2.75?

console.groupCollapsed('Ejercicio 13: ')
console.log(`${num15} >= ${num16} = ${num15 >= num16}`)
console.groupEnd()

// 14. ¿Es "2.75" menor o igual a 2.75?

console.groupCollapsed('Ejercicio 14: ')
console.log(`${num15} <= ${num16} = ${num15 <= num16}`)
console.groupEnd()

// 15. ¿Es "2.75" un número mayor a 2.8?

let num17 = '2.75'
let num18 = 2.8

console.groupCollapsed('Ejercicio 15: ')
console.log(`${num17} > ${num18} = ${num17 > num18}`)
console.groupEnd()

// 16. ¿Es "2.75" un número menor a 2.7?

let num19 = '2.75'
let num20 = 2.7

console.groupCollapsed('Ejercicio 16: ')
console.log(`${num19} < ${num20} = ${num19 < num20}`)
console.groupEnd()

// 17. ¿Es el nombre "John" diferente de "john"? 

let nombre1 = 'John'
let nombre2 = 'john'

console.groupCollapsed('Ejercicio 17: ')
console.log(`${nombre1} != ${nombre2} = ${nombre1 != nombre2}`)
console.groupEnd()

// 18. ¿Es el nombre "John" diferente de "Jon"?

let nombre3 = 'John'
let nombre4 = 'Jon'

console.groupCollapsed('Ejercicio 18: ')
console.log(`${nombre3} != ${nombre4} = ${nombre3 != nombre4}`)
console.groupEnd()

// 19. ¿Es la edad 30 estrictamente diferente de "30"?

let edad1 = 30
let edad2 = '30'

console.groupCollapsed('Ejercicio 19: ')
console.log(`${edad1} !== ${edad2} = ${edad1 !== edad2}`)
console.groupEnd()

// 20. ¿Cuál es el resultado de desplazar a la derecha 25 dos veces en bits?

let numDesplazar = 25
let desplazado = numDesplazar>>2

console.groupCollapsed('Ejercicio 20: ')
console.log(`${numDesplazar} desplazado dos veces en bits es: ${desplazado}`)
console.groupEnd()

// 21. ¿Cuál es el resultado de desplazar a la izquierda 8 tres veces en bits?

let numDesplazar2 = 8
let desplazado2 = numDesplazar2<<3

console.groupCollapsed('Ejercicio 21: ')
console.log(`${numDesplazar2} desplazado a la izquierda 3 veces en bits es: ${desplazado2}`)
console.groupEnd()

// 22. ¿Son 15 y 15 iguales? 

let num21 = 15
let num22 = 15

console.groupCollapsed('Ejercicio 22: ')
console.log(`${num21} == ${num22} = ${num21 == num22}`)
console.groupEnd()

// 23. ¿Son 20 y 30 diferentes? 

let num23 = 20
let num24 = 30

console.groupCollapsed('Ejercicio 23: ')
console.log(`${num23} != ${num24} = ${num23 != num24}`)
console.groupEnd()

// 24. ¿Es "15" mayor que 30? 

let num25 = '15'
let num26 = 30

console.groupCollapsed('Ejercicio 24: ')
console.log(`${num25} > ${num26} = ${num25 > num26}`)
console.groupEnd()

// 25. ¿Es 20 menor que 40? 

let num27 = 20
let num28 = 40

console.groupCollapsed('Ejercicio 25: ')
console.log(`${num27} < ${num28} = ${num27 < num28}`)
console.groupEnd()

// 26. ¿Es 100 mayor o igual a "99"? 

let num29 = 100
let num30 = '99'

console.groupCollapsed('Ejercicio 26: ')
console.log(`${num29} >= ${num30} = ${num29 >= num30}`)
console.groupEnd()

// 27. ¿Es 500 estrictamente igual a "500"? 

let num31 = 500
let num32 = '500'

console.groupCollapsed('Ejercicio 27: ')
console.log(`${num31} === ${num32} = ${num31 === num32}`)
console.groupEnd()

// 28. ¿Es 750 estrictamente igual a 750? 

let num33 = 750
let num34 = 750

console.groupCollapsed('Ejercicio 28: ')
console.log(`${num33} === ${num34} = ${num33 === num34}`)
console.groupEnd()

// 29. ¿Es 5 estrictamente diferente de "5"? 

let num35 = 5
let num36 = '5'

console.groupCollapsed('Ejercicio 29: ')
console.log(`${num35} !== ${num36} = ${num35 !== num36}`)
console.groupEnd()

// 30. ¿Es 3 mayor que 5 y 4 menor que 6? (Operadores lógicos) 

let num37 = 3
let num38 = 5
let num39 = 4
let num40 = 6

console.groupCollapsed('Ejercicio 30: ')
console.log(`((${num37} > ${num38}) && (${num39} < ${num40}) = ${(num37 > num38) && (num39 < num40)}`)
console.groupEnd()
