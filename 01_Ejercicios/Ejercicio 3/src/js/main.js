
// Ejercicio 3 - Promedio de notas

let grades = []
let averages = []
let states = []
let aux = []
let data = 1
let total = 0
let state

for (let i = 1; i <= 5; i += 1) {
    while (data = 1) {
        let grade = prompt(`Ingrese una de las notas de la asignatura #${i}: `)

        while (Number.isNaN(grade)) {
            console.warn("¡Cuidado! El dato ingresado no es un número")
            grade = Number(prompt("Por favor ingrese un dato numérico: "))
        }

        while ((grade < 0) || (grade > 5)) {
            console.warn("¡Cuidado! El dato ingresado no es una nota permitida")
            grade = Number(prompt("Por favor ingrese un dato numérico entre 0 y 5: "))
        }

        grades.push(grade)
        process = prompt("¿Desea agregar otra nota? (Si/No)").toLowerCase()

        while ((process != "si") && (process != "no")) {
            console.warn("Ingrese solo la respuesta Si o No")
            process = prompt("¿Desea agregar otra nota? (Si/No)").toLowerCase()
        }

        if (process == "no") {
            break
        } else if (process == "si") {
            data = 1
        }
    }

    for (let n = 0; n < grades.length; n += 1) {
        total += grades[n]
    }

    let average = total / grades.length
    console.log(`Promedio: ${average}`)
    total = 0

    if (average < 3) {
        states = console.log("Reprobado")
    } else {
        states = console.log("Aprobado")
    }

    console.groupCollapsed(`Notas asignatura #${i}: `)
    for (let m = 0; m < grades.length; m += 1) {
        console.log(grades[m])
    }
    console.groupEnd()
    grades = []
}


// for(let m = 0; m < grades.length; m += 1) {

// }



