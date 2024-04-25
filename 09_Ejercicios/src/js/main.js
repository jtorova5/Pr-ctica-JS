
// 1. Crea un lista que almacene 10 nombres completos y ordenados alfabéticamente

let nombres = ['maria', 'jhonatan', 'eloy', 'majo', 'mateo', 'alejo', 'sebastian', 'sergio', 'daniela', 'juan']

console.groupCollapsed('Ejercicio 1: ')

console.log('Nombres:', nombres)

console.groupEnd()

// 3. Utilizar un bucle for para sumar todos los elementos de un array de números

let numeros = [10, 20, 30, 40, 5, 3, 1, 1]
let suma = 0

for (let i = 0; i < numeros.length; i += 1) {
    suma += numeros[i]
}

console.groupCollapsed('Ejercicio 3: ')

console.log('Suma:', suma)

console.groupEnd()

// 4. Iterar sobre las propiedades de un objeto utilizando un bucle for...in e imprimir sus valores

console.groupCollapsed('Ejercicio 4: ')

for (const nombre in nombres) {
    console.log('Nombre:', nombres[nombre])
}

console.groupEnd()

// 5. Utilizar un bucle for...of para sumar todos los números de un array

let sumaForOf = 0

for (const numero of numeros) {
    sumaForOf += numero
}

console.groupCollapsed('Ejercicio 5: ')

console.log('Suma:', sumaForOf)

console.groupEnd()

// 6. Utilizar el método forEach() para imprimir en la consola todos los elementos de un array de strings

console.groupCollapsed('Ejercicio 6: ')

nombres.forEach(nombre => {
    console.log('Nombre:', nombre)
})

console.groupEnd()

// 7. Utilizar el método map() para obtener un nuevo array con cada elemento de un array de números multiplicado por 2

let numerosDuplicados = numeros.map(numero => {
    return numero * 2
})

console.groupCollapsed('Ejercicio 7: ')

console.log('Números:', numeros)
console.log('Números duplicados:', numerosDuplicados)

console.groupEnd()

// 8. Utilizar el método filter() para obtener un nuevo array con solo los números pares de un array dado

let numerosPares = numeros.filter(numero => (numero % 2 == 0))

console.groupCollapsed('Ejercicio 8: ')

console.log('Números:', numeros)
console.log('Números pares:', numerosPares)

console.groupEnd()

// 9. Utilizar el método some() para comprobar si al menos uno de los elementos de un array de números es mayor que 10

let checkNumero = numeros.some(numero => (numero > 10))

console.groupCollapsed('Ejercicio 9: ')

console.log('Números:', numeros)
console.log('¿Hay mayores que 10?', checkNumero)

console.groupEnd()

// 10. Utilizar el método every() para comprobar si todos los elementos de un array de números son positivos

let checkPositivos = numeros.every(numero => (numero >= 0))

console.groupCollapsed('Ejercicio 10: ')

console.log('Números:', numeros)
console.log('¿Son todos positivos?', checkPositivos)

console.groupEnd()

// 11. Utilizar el método sort() para ordenar un array de números de menor a mayor

console.groupCollapsed('Ejercicio 11: ')

console.log('Números:', numeros)
numeros.sort((a, b) => a - b)
console.log('Números ordenados:', numeros)

console.groupEnd()

// 12. Utilizar el método reverse() para invertir el orden de un array dado

console.groupCollapsed('Ejercicio 12: ')

console.log('Nombres:', nombres)
nombres.reverse()
console.log('Nombres reverso:', nombres)

console.groupEnd()

// 13. Crear una función toReversed() que tome un array y devuelva un nuevo array con los elementos en orden inverso

let arrayReverso = nombres.toReversed()

console.groupCollapsed('Ejercicio 13: ')

console.log('Nombres:', nombres)
nombres.reverse()
console.log('Nombres reverso:', nombres)

console.groupEnd()

// 14. Utilizar el método forEach() para calcular la suma de todos los elementos de un array de números

let sumaNum = 0

let sumaNumeros = numeros.forEach(numero => {
    sumaNum += numero
})

console.groupCollapsed('Ejercicio 14: ')

console.log('Números:', numeros)
console.log('Sumatoria:', sumaNum)

console.groupEnd()

// 15. Iterar sobre las propiedades de un objeto y contar cuántas son de tipo string utilizando un bucle for...in

let carro = {
    marca: 'renault',
    modelo: 'sandero',
    año: 2015,
    color: 'negro perlado',
    soat: true
}

let contadorStrings = 0

for (let propiedad in carro) {
    if (typeof carro[propiedad] === 'string') {
        contadorStrings += 1
    }
}

console.groupCollapsed('Ejercicio 15: ')

console.log('Cantidad de strings:', contadorStrings)

console.groupEnd()

// 16. Utilizar el método forEach() para imprimir en la consola todos los elementos de un array de objetos

let arrayDeObjetos = [
    { nombre: 'objeto1', valor: 1 },
    { nombre: 'objeto2', valor: 2 },
    { nombre: 'objeto3', valor: 3 }
]

console.groupCollapsed('Ejercicio 16: ')

arrayDeObjetos.forEach(objeto => {
    Object.entries(objeto).forEach(([clave, valor]) => {
        console.log(`${clave}: ${valor}`)
    })
})

console.groupEnd()

// 17. Utilizar el método map() para obtener un nuevo array con la longitud de cada string en un array dado

let arrayDeStrings = ['Hola', 'Mundo', 'JavaScript', 'Desarrollo de software']

let longitudes = arrayDeStrings.map(str => str.length)

console.groupCollapsed('Ejercicio 17: ')

console.log('Array:', arrayDeStrings)
console.log('Longitudes:', longitudes)

console.groupEnd()

// 18. Utilizar el método filter() para obtener un nuevo array con solo las strings que contengan la letra 'a' en un array dado

let stringFiltrado = arrayDeStrings.filter(str => str.includes('a'))

console.groupCollapsed('Ejercicio 18: ')

console.log('Array:', arrayDeStrings)
console.log('Filtrado:', stringFiltrado)

console.groupEnd()

// 19. Utilizar el método some() para comprobar si alguna string en un array dado tiene una longitud mayor que 10 caracteres

let checkArray = arrayDeStrings.some(str => (str.length > 10))

console.groupCollapsed('Ejercicio 19: ')

console.log('Array:', arrayDeStrings)
console.log('¿Hay strings de más de 10 caracteres?', checkArray)

console.groupEnd()

// 20. Utilizar el método every() para comprobar si todas las strings en un array dado contienen al menos una vocal

let checkArray2 = arrayDeStrings.every(str => (str.includes('a')) || (str.includes('e')) || (str.includes('i')) || (str.includes('o')) || (str.includes('u')))

console.groupCollapsed('Ejercicio 20: ')

console.log('Array:', arrayDeStrings)
console.log('¿Todos los strings contienen por lo menos una vocal?', checkArray2)

console.groupEnd()

// 21. Dado un array de objetos que representan libros con propiedades titulo y paginas, utilizar filter() para obtener un nuevo array con solo los libros que tengan más de 300 páginas

let libros = [
    { titulo: 'El Señor de los Anillos', paginas: 1200 },
    { titulo: 'Harry Potter y la Piedra Filosofal', paginas: 300 },
    { titulo: 'Cien años de soledad', paginas: 432 },
    { titulo: '1984', paginas: 328 }
]

let librosMasDe300Paginas = libros.filter(libro => libro.paginas > 300)

console.groupCollapsed('Ejercicio 21: ')

console.log('Libros:', libros)
console.log('Libros de más de 300 paginas:', librosMasDe300Paginas)

console.groupEnd()

// 22. Dado un array de números, utilizar filter() para obtener un nuevo array con solo los números que sean divisibles por 3

let arrayNumeros = [10, 15, 20, 25, 30, 35, 40, 45]

let divisiblesPor3 = arrayNumeros.filter(numero => numero % 3 === 0)

console.groupCollapsed('Ejercicio 22: ')

console.log('Números:', arrayNumeros)
console.log('Números divisibles por 3:', divisiblesPor3)

console.groupEnd()

// 23. Dado un array de strings, utilizar filter() para obtener un nuevo array con solo las strings que tengan una longitud mayor que 5

let longitudMayorA5 = arrayDeStrings.filter(str => str.length > 5)

console.groupCollapsed('Ejercicio 23: ')

console.log('Array:', arrayDeStrings)
console.log('String de más de 5 caracteres:', longitudMayorA5)

console.groupEnd()

// 24. Dado un array de objetos que representan personas con propiedades nombre y edad, utilizar filter() para obtener un nuevo array con solo las personas mayores de 18 años

let personas = [
    { nombre: 'juan', edad: 25 },
    { nombre: 'maria', edad: 17 },
    { nombre: 'pedro', edad: 30 },
    { nombre: 'laura', edad: 22 }
]

let personasMayoresDe18 = personas.filter(persona => persona.edad > 18)

console.groupCollapsed('Ejercicio 24: ')

console.log('Personas:', personas)
console.log('Mayores de 18 años:', personasMayoresDe18)

console.groupEnd()

// 25. Dado un array de booleanos, utilizar filter() para obtener un nuevo array con solo los valores true

let booleanos = [true, false, false, true, true, false];

let valoresTrue = booleanos.filter(valor => valor === true);

console.groupCollapsed('Ejercicio 25: ')

console.log('Booleanos:', booleanos)
console.log('Booleanos "true":', valoresTrue)

console.groupEnd()

// 26. Dado un array de números, utilizar map() para obtener un nuevo array con el cuadrado de cada número

let numerosCuadrados = numeros.map(numero => {
    return numero ** 2
})

console.groupCollapsed('Ejercicio 26: ')

console.log('Números:', numeros)
console.log('Números cuadrados:', numerosCuadrados)

console.groupEnd()

// 27. Dado un array de strings, utilizar map() para obtener un nuevo array con cada string en mayúsculas

let mayusculas = arrayDeStrings.map(str => str.toUpperCase())

console.groupCollapsed('Ejercicio 27: ')

console.log('Array:', arrayDeStrings)
console.log('Mayúsculas:', mayusculas)

console.groupEnd()

// 28. Dado un array de objetos que representan productos con propiedades nombre y precio, utilizar map() para obtener un nuevo array con solo los precios de los productos

let productos = [
    { nombre: 'Producto 1', precio: 100 },
    { nombre: 'Producto 2', precio: 2500 },
    { nombre: 'Producto 3', precio: 700 }
]

let precios = productos.map(producto => producto.precio);

console.groupCollapsed('Ejercicio 28: ')

console.log('Productos:', productos)
console.log('Precios:', precios)

console.groupEnd()

// 29. Dado un array de objetos que representan personas con propiedades nombre y edad, utilizar map() para obtener un nuevo array con solo los nombres de las personas

let nombresPersonas = personas.map(persona => persona.nombre)

console.groupCollapsed('Ejercicio 29: ')

console.log('Personas:', personas)
console.log('Nombres:', nombresPersonas)

console.groupEnd()

// 30. Dado un array de números, utilizar map() para obtener un nuevo array con la raíz cuadrada de cada número

let raizCuadrada = numerosCuadrados.map(numero => {
    return Math.sqrt(numero)
})

console.groupCollapsed('Ejercicio 30: ')

console.log('Números:', numerosCuadrados)
console.log('Raices:', raizCuadrada)

console.groupEnd()