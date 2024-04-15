
// Ejercicio 2 - Clasificación de frutas

let frutas = []
let data = 1

while (data == 1) {
    frutas.unshift(prompt("Ingrese una fruta: "))
    process = prompt("¿Desea agregar otra fruta? (Si/No)").toLowerCase()
    if (process == "no") {
        break
    } else if (process == "si") {
        data = 1
    } else {
        console.alert("Ingrese solo la respuesta Si o No")
    }
}

for (let i = 1; i <= frutas.length(); i += 1) {
    console.log(frutas[i])
}