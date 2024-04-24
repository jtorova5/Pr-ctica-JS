
// 1. Crea un array llamado frutas que contenga al menos 5 nombres de frutas diferentes

let frutas = ['uvas', 'manzanas', 'maracuyá', 'sandias', 'moras', 'zapote']

console.groupCollapsed('Ejercicio 1: ')

console.log('Frutas:', frutas)

console.groupEnd()

// 2. Utiliza un bucle for para recorrer el array frutas e imprimir cada elemento en la consola

console.groupCollapsed('Ejercicio 2: ')

for (let i = 0; i < frutas.length; i += 1) {
    console.log(frutas[i])
}

console.groupEnd()

// 3. Utiliza un foreach para recorrer el array frutas e imprimir cada fruta en mayúscula en la consola

console.groupCollapsed('Ejercicio 3: ')

frutas.forEach(fruta => {
    console.log(fruta.toUpperCase())
})

console.groupEnd()

// 4. Crea un array llamado números que contenga los números del 1 al 10

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.groupCollapsed('Ejercicio 4: ')

console.log('Números:', numeros)

console.groupEnd()

// 5. Utiliza un bucle while para recorrer el array numeros e imprimir cada elemento en la consola

let contador = 0

console.groupCollapsed('Ejercicio 5: ')

while (contador < numeros.length) {
    console.log('Número:', numeros[contador])
    contador += 1
}

console.groupEnd()

// 6. Agrega una nueva fruta al final del array frutas

frutas.push('pera')

console.groupCollapsed('Ejercicio 6: ')

console.log('Frutas:', frutas)

console.groupEnd()

// 7. Elimina el segundo elemento del array números

delete numeros[1]

console.groupCollapsed('Ejercicio 7: ')

console.log('Números:', numeros)

console.groupEnd()

// 8. Invierte el orden de los elementos en el array frutas

console.groupCollapsed('Ejercicio 8: ')

console.log('Frutas:', frutas)
frutas.reverse()
console.log('Frutas invertido:', frutas)

console.groupEnd()

// 9. Ordena el array numeros en orden descendente

console.groupCollapsed('Ejercicio 9: ')

console.log('Numeros:', numeros)
numeros.sort((a, b) => a - b)
numeros.reverse()
console.log('Numeros descendentes:', numeros)

console.groupEnd()

// 10. Crea una función llamada buscarFruta que tome como argumento una fruta y devuelva true si esa fruta está en el array frutas, y false en caso contrario

let buscarFruta = (fruta) => {
    if (frutas.includes(fruta)) {
        console.log(`¿Tiene la fruta ${fruta}?`, true)
    } else {
        console.log(`¿Tiene la fruta ${fruta}?`, false)
    }
}

console.groupCollapsed('Ejercicio 10: ')

console.log('Frutas:', frutas)
buscarFruta('sandias')
buscarFruta('bananos')

console.groupEnd()

// 11. Imprime en la consola el primer elemento del array frutas

console.groupCollapsed('Ejercicio 11: ')

console.log('Frutas:', frutas)
console.log('Fruta:', frutas.at(0))

console.groupEnd()

// 12. Imprime en la consola el último elemento del array numeros

console.groupCollapsed('Ejercicio 12: ')

console.log('Numeros:', numeros)
console.log('Numero:', numeros.at(-1))

console.groupEnd()

// 13. Utiliza el método forEach para imprimir cada fruta pero convertida a array

console.groupCollapsed('Ejercicio 13: ')

console.log(frutas)

frutas = frutas.map(fruta => {
    return [fruta]
})

frutas.forEach(fruta => {
    console.log(fruta)
})

console.groupEnd()

// 14. Utiliza un bucle for of para imprimir cada número del array numeros en la consola

console.groupCollapsed('Ejercicio 14: ')

console.log('Numeros:', numeros)

for (const numero of numeros) {
    console.log('Número:', numero)
}

console.groupEnd()

// 15. Crea un nuevo array llamado duplicados que contenga el doble de cada número en el array numeros utilizando el método map

let duplicados = numeros.map(numero => {
    return numero * 2
})

console.groupCollapsed('Ejercicio 15: ')

console.log('Numeros:', numeros)
console.log('Numeros duplicados:', duplicados)

console.groupEnd()

// 16. Crea dos arrays llamados array1 y array2, cada uno con al menos 3 números

let array1 = [5, 10, 1]
let array2 = [25, 2, 33]

console.groupCollapsed('Ejercicio 16: ')

console.log('Array1:', array1)
console.log('Array2:', array2)

console.groupEnd()

// 17. Calcula la suma de los elementos de array1 y array2 por separado y muestra los resultados en la consola

let sumaArray1 = 0
let sumaArray2 = 0

array1.forEach(numero => {
    sumaArray1 += numero
})

array2.forEach(numero => {
    sumaArray2 += numero
})

console.groupCollapsed('Ejercicio 17: ')

console.log('Suma array1:', sumaArray1)
console.log('Suma array2:', sumaArray2)

console.groupEnd()

// 18. Crea una función llamada buscarNumero que tome como argumentos un número y un array de números, y devuelva true si el número está en el array, y false en caso contrario

let buscarNumero = (num, array) => {
    if (array.includes(num)) {
        console.log('El arreglo', array, 'contiene el número', num)
    } else {
        console.log('El arreglo', array, 'NO contiene el número', num)
    }
}

console.groupCollapsed('Ejercicio 18: ')

buscarNumero(1, [10, 20, 30])
buscarNumero(1, [1, 3, 5])

console.groupEnd()

// 19. Crea un array llamado edades que contenga al menos 5 números (edades)

let edades = [26, 9, 22, 54, 53, 12, 45, 5]

console.groupCollapsed('Ejercicio 19: ')

console.log('Edades:', edades)

console.groupEnd()

// 20. Filtra el array edades para obtener un nuevo array llamado mayoresDeEdad que contenga solo las edades mayores o iguales a 18

let mayoresDeEdad = []

edades.forEach(edad => {
    if (edad >= 18) {
        mayoresDeEdad.push(edad)
    }
})

console.groupCollapsed('Ejercicio 20: ')

console.log('Mayores de edad:', mayoresDeEdad)

console.groupEnd()

// 21. Crea un array llamado precios que contenga al menos 3 números (precios de productos)

let precios = [1500, 27000, 5000, 2300, 600]

console.groupCollapsed('Ejercicio 21: ')

console.log('Precios:', precios)

console.groupEnd()

// 22. Utiliza el método map para crear un nuevo array llamado preciosConIVA que contenga los precios con un 21% de IVA aplicado a cada uno

let preciosConIva = precios.map(precio => {
    return precio * 1.21
})

console.groupCollapsed('Ejercicio 22: ')

console.log('Precios:', precios)
console.log('Precios con IVA:', preciosConIva)

console.groupEnd()

// 23. Crea un array llamado duplicados que contenga algunos números duplicados

let duplicados2 = [10, 20, 32, 32, 10, 20]

console.groupCollapsed('Ejercicio 21: ')

console.log('Duplicados:', duplicados2)

console.groupEnd()

// 24. Elimina los elementos duplicados del array duplicados y muestra el nuevo array sin duplicados en la consola

let sinDuplicados = []

duplicados2.forEach(numero => {
    if (!sinDuplicados.includes(numero)) {
        sinDuplicados.push(numero)
    }
})

console.groupCollapsed('Ejercicio 24: ')

console.log('Duplicados:', duplicados2)
console.log('Sin duplicados:', sinDuplicados)

console.groupEnd()

// 25. Crea dos arrays llamados array1 y array2, cada uno con al menos 3 nombres

let nombres1 = ['jhonatan', 'majo', 'mateo']
let nombres2 = ['juanjo', 'nata', 'joan']

console.groupCollapsed('Ejercicio 25: ')

console.log('Nombres1:', nombres1)
console.log('Nombres2:', nombres2)

console.groupEnd()

// 26. Concatena los dos arrays en uno nuevo llamado concatenado y muestra el resultado en la consola

let concatenado = [...nombres1, ...nombres2]

console.groupCollapsed('Ejercicio 26: ')

console.log('Nombres1:', nombres1)
console.log('Nombres2:', nombres2)
console.log('Concatenado:', concatenado)

console.groupEnd()

// 27. Crea un array llamado colores que contenga al menos 5 colores diferentes

let colores = ['azul', 'negro', 'blanco', 'amarillo', 'rojo']

console.groupCollapsed('Ejercicio 27: ')

console.log('Colores:', colores)

console.groupEnd()

// 28. Cuenta cuántos elementos tiene el array colores y muestra el resultado en la consola

let cantidadColores = colores.length

console.groupCollapsed('Ejercicio 28: ')

console.log('Colores:', colores)
console.log('Cantidad colores:', cantidadColores)

console.groupEnd()