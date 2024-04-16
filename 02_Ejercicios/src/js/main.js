
// Ejercicios

// 1. Declara dos variables, num1 y num2, asignándoles valores numéricos diferentes y muestra en consola el resultado de sumarlos.

let num1 = 5
let num2 = 3

let total = num1 + num2

console.groupCollapsed('Ejercicio 1')
console.log(`El resultado de sumar ${num1} y ${num2} es: ${total}`)
console.groupEnd()

// 2. Define dos variables de tipo string, simpleString1 y simpleString2, con valores "Hola" y "Mundo" respectivamente. Muestra en consola la longitud total de ambas cadenas.

let simpleString1 = 'Hola'
let simpleString2 = 'Mundo'

let lengthSt1 = simpleString1.length
let lengthSt2 = simpleString2.length

console.groupCollapsed('Ejercicio 2')
console.log(`Longitud string #1: ${lengthSt1} caracteres`)
console.log(`Longitud string #2: ${lengthSt2} caracteres`)
console.groupEnd()

// 3. Crea dos variables de tipo string usando la función String(): stringUsingString1 con el valor "JavaScript" y stringUsingString2 con el valor "Ejercicios".

let stringUsingString1 = String('JavaScript').toLowerCase()
let stringUsingString2 = String('Ejercicios').toLowerCase()

console.groupCollapsed('Ejercicio 3')
console.log(`Bienvenido a los ${stringUsingString2} de ${stringUsingString1}`)
console.groupEnd()

// 4. Utiliza el operador new para crear dos variables de tipo string: stringUsingNewString1 con el valor "Concatenar" y stringUsingNewString2 con el valor "Strings".

let stringUsingNewString1 = new String('Concatenar').toLowerCase()
let stringUsingNewString2 = new String('Strings').toLowerCase()

console.groupCollapsed('Ejercicio 4')
console.log(`Ejercicio para ${stringUsingNewString1} ${stringUsingNewString2}`)
console.groupEnd()

// 5. Calcula e imprime en consola la posición del substring "la" en la variable simpleString1.

let posLa = simpleString1.indexOf('la')

console.groupCollapsed('Ejercicio 5')
console.log(`El índice de "la" en "Hola" es: ${posLa}`)
console.groupEnd()

// 6. Comprueba si la variable simpleString2 contiene el substring "ndo" e imprime el resultado en consola.

let testSt2 = simpleString2.includes('ndo')
let posTestSt2 = simpleString2.indexOf('ndo')

console.groupCollapsed('Ejercicio 6')
if (testSt2) {
    console.log(`El string "${simpleString2}" contiene al substring "ndo" en la posición ${posTestSt2}`)
} else {
    console.log(`El string ${simpleString2} NO contiene al substring "ndo".`)
}
console.groupEnd()

// 7. Concatena las variables simpleString1 y simpleString2 utilizando el método concat() y muestra el resultado en consola.

let concatStrings = simpleString1.concat(simpleString2)

console.groupCollapsed('Ejercicio 7')
console.log(`Resultado concatenar strings: ${concatStrings}`)
console.groupEnd()

// 8. Concatena las variables simpleString1 y simpleString2 utilizando el operador + y muestra el resultado en consola.

let concatOper = simpleString1 + simpleString2

console.groupCollapsed('Ejercicio 8')
console.log(`Resultado concatenar strings con operador "+": ${concatOper}`)
console.groupEnd()

// 9. Utiliza template strings para concatenar las variables simpleString1 y simpleString2 e imprime el resultado en consola.

console.groupCollapsed('Ejercicio 9')
console.log(`Resultado concatenar strings con template strings: ${simpleString1} ${simpleString2}`)
console.groupEnd()

// 10. Declara una variable stringWithSpaces1 con el valor " TrimStart" y otra variable stringWithSpaces2 con el valor "TrimEnd ". Elimina los espacios en blanco al principio y al final de ambas cadenas e imprime el resultado en consola.

let stringWithSpaces1 = ' TrimStart'
let stringWithSpaces2 = 'TrimEnd '

let stringWithOutSpaces1 = stringWithSpaces1.trim()
let stringWithOutSpaces2 = stringWithSpaces2.trim()

console.groupCollapsed('Ejercicio 10')
console.log(`La palabra "${stringWithSpaces1}" queda como "${stringWithOutSpaces1}"`)
console.log(`La palabra "${stringWithSpaces2}" queda como "${stringWithOutSpaces2}"`)
console.groupEnd()

// 11. Reemplaza la letra 'o' por la letra 'i' en la variable simpleString1 e imprime el resultado en consola.

let replaceSt1 = simpleString1.replace('o', 'i')

console.groupCollapsed('Ejercicio 11')
console.log(`Al reemplzar "o" por "i", el string "${simpleString1}" queda como "${replaceSt1}"`)
console.groupEnd()

// 12. Utiliza el método slice() para obtener los primeros tres caracteres de la variable simpleString2 e imprime el resultado en consola.

let sliceSt2 = simpleString2.slice(0, 3)

console.groupCollapsed('Ejercicio 12')
console.log(`Los primeros 3 caracteres de la palabra "${simpleString2}" son: ${sliceSt2}`)
console.groupEnd()

// 13. Utiliza el método substring() para obtener una subcadena de la variable simpleString2 que comience en el índice 2 e imprime el resultado en consola.

let subSt2 = simpleString2.substring(2)

console.groupCollapsed('Ejercicio 13')
console.log(`La subcadena del string "${simpleString2}" que comienza en la posición #2 es: "${subSt2}"`)
console.groupEnd()

// 14. Repite la variable simpleString1 dos veces utilizando el método repeat() e imprime el resultado en consola.

let repeatSt1 = simpleString1.repeat(2)

console.groupCollapsed('Ejercicio 14')
console.log(`El string "${simpleString1}" repetido, queda: "${repeatSt1}"`)
console.groupEnd()

// 15. Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola.

let stringEjemplo = "Esto es una oración de ejemplo"
let arrayEjemplo = stringEjemplo.split(" ")

console.groupCollapsed('Ejercicio 15')
console.log(`El string "${stringEjemplo}" dividido por palabras en un array, queda: "[${arrayEjemplo}]"`)
console.groupEnd()

// 16. Convierte la variable simpleString2 a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola.

let upperCaseSt2 = simpleString2.toUpperCase()

console.groupCollapsed('Ejercicio 16')
console.log(`El string "${simpleString2}" en mayúsculas, queda: "${upperCaseSt2}"`)
console.groupEnd()

// 17. Convierte la variable simpleString1 a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola.

let lowerCaseSt1 = simpleString1.toLowerCase()

console.groupCollapsed('Ejercicio 17')
console.log(`El string "${simpleString1}" en minúsculas, queda: "${lowerCaseSt1}"`)
console.groupEnd()

// 18. Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof().

let varBool = true
let typeVar = typeof(varBool)

console.groupCollapsed('Ejercicio 18')
console.log(`"${varBool}" es un tipo de dato ${typeVar}`)
console.groupEnd()

// 19. Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array.

let arreglo = [3, 10, 1997, 13, 4, 2005]
let lengthArreglo = arreglo.length

console.groupCollapsed('Ejercicio 19')
console.log(`"El arreglo "[${arreglo}]" tiene una longitud de ${lengthArreglo} datos`)
console.groupEnd()

// 20. Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.

let objeto = {
    nombre: 'Jhonatan',
    apellido: 'Toro',
    edad: 26
}

console.groupCollapsed('Ejercicio 20')
console.log(`${objeto.nombre} ${objeto.apellido} tiene ${objeto.edad} años de edad`)
console.groupEnd()

// 21. Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().

let nulo = null
let typeNulo = typeof(nulo)

console.groupCollapsed('Ejercicio 21')
console.log(`${nulo} es un tipo de dato ${typeNulo}`)
console.groupEnd()

// 22. Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().

let indefinido
let typeIndefinido = typeof(indefinido)

console.groupCollapsed('Ejercicio 22')
console.log(`${indefinido} es un tipo de dato ${typeIndefinido}`)
console.groupEnd()

// 23. Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof().

let decimal = 0.3463643
let typeDecimal = typeof(decimal)

console.groupCollapsed('Ejercicio 23')
console.log(`${decimal} es un tipo de dato ${typeDecimal}`)
console.groupEnd()

// 24. Declara una variable negativo y asígnale un número negativo. Muestra en consola su tipo de dato utilizando el operador typeof().

let negativo = -214312
let typeNegativo = typeof(negativo)

console.groupCollapsed('Ejercicio 24')
console.log(`${negativo} es un tipo de dato ${typeNegativo}`)
console.groupEnd()

// 25. Utiliza el método indexOf() para encontrar la posición del carácter 'a' en la cadena "Casa" e imprime el resultado en consola.

let cadena = 'Casa'
let posCadena = cadena.indexOf('a')

console.groupCollapsed('Ejercicio 25')
console.log(`La posición de la primera 'a' en ${cadena} es: ${posCadena}`)
console.groupEnd()

// 26. Comprueba si la cadena "Javascript" incluye el substring "Script" utilizando el método includes() e imprime el resultado en consola.

let cadena2 = 'Javascript'
let substring = 'Script'
let testCadena2 = cadena2.includes(substring)

console.groupCollapsed('Ejercicio 26')
if (testCadena2) {
    console.log(`El string ${cadena} contiene el substring "${substring}"`)
} else {
    console.log(`El string ${cadena} NO contiene el substring "${substring}"`)
}
console.groupEnd()

// 27. Concatena las cadenas "Hola" y "Mundo" utilizando el método concat() y muestra el resultado en consola.

let cad1 = 'Hola'
let cad2 = 'Mundo'
let concatCad = cad1.concat(cad2)

console.groupCollapsed('Ejercicio 27')
console.log(`Resultado de la concatenación con el método concat(): ${concatCad}`)
console.groupEnd()

// 28. Concatena las cadenas "Hola" y "Mundo" utilizando el operador + y muestra el resultado en consola.

let concatOperadorCad = cad1 + cad2

console.groupCollapsed('Ejercicio 28')
console.log(`Resultado de la concatenación con el operador "+": ${concatOperadorCad}`)
console.groupEnd()

// 29. Utiliza template strings para concatenar las cadenas "Hola" y "Mundo" e imprime el resultado en consola.

console.groupCollapsed('Ejercicio 29')
console.log(`Resultado concatenar strings con template strings: ${cad1} ${cad2}`)
console.groupEnd()

// 30. Declara una variable cadenaConEspacios con el valor " Ejemplo con espacios ". Utiliza el método trimStart() y trimEnd() para eliminar los espacios en blanco al principio y al final, respectivamente, e imprime el resultado en consola.

let cadenaConEspacios = ' Ejemplo con espacios '
let cadenaSinEspacios = cadenaConEspacios.trimStart().trimEnd()

console.groupCollapsed('Ejercicio 30')
console.log(`La cadena "${cadenaConEspacios}" sin espacios queda como "${cadenaSinEspacios}"`)
console.groupEnd()

// 31. Reemplaza la palabra "azul" por "rojo" en la cadena "El cielo es azul" utilizando el método replace() e imprime el resultado en consola.

let cad = 'El cielo es azul'
let replaceCad = cad.replace('azul', 'rojo')

console.groupCollapsed('Ejercicio 31')
console.log(`La cadena "${cad}" queda como "${replaceCad}"`)
console.groupEnd()

// 32. Utiliza el método slice() para obtener los últimos cuatro caracteres de la cadena "Programación" e imprime el resultado en consola.

let newCadena = 'Programación'
let sliceNewCadena = newCadena.slice(8)

console.groupCollapsed('Ejercicio 32')
console.log(`Los últimos cuatro caracteres de la cadena "${newCadena}" son "${sliceNewCadena}"`)
console.groupEnd()

// 33. Utiliza el método substring() para obtener una subcadena de la cadena "JavaScript" que comience en el índice 2 e imprime el resultado en consola.

let string = "JavaScript"
let subString = string.substring(2)

console.groupCollapsed('Ejercicio 33')
console.log(`De la cadena "${string}" y empezando desde el índice 2, se obtiene la subcadena "${subString}"`)
console.groupEnd()

// 34. Repite la cadena "Hola" tres veces utilizando el método repeat() e imprime el resultado en consola.

let stringToRepeat = 'Hola'
let repeatString = stringToRepeat.repeat(3)

console.groupCollapsed('Ejercicio 34')
console.log(`El string "${stringToRepeat}" repetido, queda: "${repeatString}"`)
console.groupEnd()

// 35. Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola.

let stringEjemplo2 = "Esto es una oración de ejemplo"
let arrayEjemplo2 = stringEjemplo.split(" ")

console.groupCollapsed('Ejercicio 35')
console.log(`El string "${stringEjemplo2}" dividido por palabras en un array, queda: "[${arrayEjemplo2}]"`)
console.groupEnd()

// 36. Convierte la cadena "Javascript" a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola.

let string2 = 'Javascript'
let upperCase = string2.toUpperCase()

console.groupCollapsed('Ejercicio 36')
console.log(`El string "${string2}" en mayúsculas, queda: "${upperCase}"`)
console.groupEnd()

// 37. Convierte la cadena "EJEMPLO" a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola.

let string3 = 'EJEMPLO'
let lowerCase = string3.toLowerCase()

console.groupCollapsed('Ejercicio 37')
console.log(`El string "${string3}" en mayúsculas, queda: "${lowerCase}"`)
console.groupEnd()

// 38. Declara una variable numero y asígnale un número. Muestra en consola su tipo de dato utilizando el operador typeof().

let numero = 54353
let typeNumero = typeof(numero)

console.groupCollapsed('Ejercicio 38')
console.log(`${numero} es un tipo de dato ${typeNumero}`)
console.groupEnd()

// 39. Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof().

let varBool2 = false
let typeVar2 = typeof(varBool2)

console.groupCollapsed('Ejercicio 39')
console.log(`"${varBool2}" es un tipo de dato ${typeVar2}`)
console.groupEnd()

// 40. Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array.

let arreglo2 = ['Manzanas', 'Peras', 'Bananos', 'Uvas', 'Maracuyá']
let lengthArreglo2 = arreglo2.length

console.groupCollapsed('Ejercicio 40')
console.log(`"El arreglo "[${arreglo2}]" tiene una longitud de ${lengthArreglo2} datos`)
console.groupEnd()

// 41. Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.

let objeto2 = {
    comida: 'pizza',
    bebida: 'jugo de maracuyá',
    postre: 'helado'
}

console.groupCollapsed('Ejercicio 41')
console.log(`Hoy quiero comer ${objeto2.comida} con ${objeto2.bebida} y un ${objeto2.postre} de postre`)
console.groupEnd()

// 42. Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().

let nulo2 = null
let typeNulo2 = typeof(nulo)

console.groupCollapsed('Ejercicio 42')
console.log(`${nulo2} es un tipo de dato ${typeNulo2}`)
console.groupEnd()

// 43. Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().

let indefinido2
let typeIndefinido2 = typeof(indefinido2)

console.groupCollapsed('Ejercicio 43')
console.log(`${indefinido2} es un tipo de dato ${typeIndefinido2}`)
console.groupEnd()

// 44. Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof().

let decimal2 = 0.432982
let typeDecimal2 = typeof(decimal2)

console.groupCollapsed('Ejercicio 44')
console.log(`${decimal2} es un tipo de dato ${typeDecimal2}`)
console.groupEnd()