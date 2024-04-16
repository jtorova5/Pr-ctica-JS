
// Ejercicio 2 - Clasificación de frutas

let fruits = []
let data = 1
let citric = []
let notCitric = []

while (data == 1) {
 fruits.push(prompt("Ingrese una fruta: ").toLowerCase()) // Con unshift puedo agregar el valor al inicio del arreglo
    process = prompt("¿Desea agregar otra fruta? (Si/No)").toLowerCase()

    while ((process != "si") && (process != "no")) {
        console.warn("Ingrese solo la respuesta Si o No")
        process = prompt("¿Desea agregar otra fruta? (Si/No)").toLowerCase()
    }

    if (process == "no") {
        break
    } else if (process == "si") {
        data = 1
    }
}

console.groupCollapsed("Frutas: ")
for (let i = 0; i < fruits.length; i += 1) {
    console.log(fruits[i])
}
console.groupEnd
for (let r = 0; r < fruits.length; r += 1) {
    let type = prompt(`La fruta ${fruits[r]} es cítrica? (Si/No)`).toLowerCase()
    if (type == "si") {
        citric.push(fruits[r])
    } else if (type == "no") {
        notCitric.push(fruits[r])
    } else {
        console.alert("Ingrese solo la respuesta Si o No")
    }
}

console.groupCollapsed("Frutas cítricas: ")
for (let n = 0; n < citric.length; n += 1) {
    console.log(citric[n])
}
console.groupEnd()

console.groupCollapsed("Frutas no cítricas: ")
for (let m = 0; m < notCitric.length; m += 1) {
    console.log(notCitric[m])
}
console.groupEnd()
