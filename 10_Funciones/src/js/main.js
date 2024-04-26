
// Creación de funciones 

console.groupCollapsed('Creación de funciones: ')

function saludarEmpleados(profesion) {
    console.info(`
    Hola ${profesion}, es un gusto saludarlos!
    Hoy es un nuevo día :D
    `)
}

saludarEmpleados('coders')
saludarEmpleados('policias')
saludarEmpleados('profesores')
saludarEmpleados('enfermeros')

console.groupEnd()

// Ejemplos creación de funciones

console.groupCollapsed('Ejemplo creacíon de funciones: ')

function saludarCoder(nombre, clan) {
    console.log(`Buenos días ${nombre}, tu clan ${clan} te espera!`)
}

function despedirCoder(nombre) {
    console.log(`Vuelve pronto ${nombre}`)
}

saludarCoder('Jhonatan', 'Gates')
despedirCoder('Jhonatan')

console.groupEnd()

// Función declarativa

console.groupCollapsed('Función declarativa: ')

function mostrarUnHolaMundo() {
    console.log('Hola mundo!')
}

console.groupEnd()

// Función expresiva

console.groupCollapsed('Función expresiva: ')

let mostrarUnHolaMundoEx = function () {
    console.log('hola mundo!')
}

console.groupEnd()

// Ejercicio Date

console.groupCollapsed('Ejercicio Date 1: ')

let fecha = new Date('2024/04/26')

let dia = fecha.getDay()

switch (dia) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Lunes')
        break
    case 2:
        console.log('Martes')
        break
    case 3:
        console.log('Miércoles')
        break
    case 4:
        console.log('Jueves')
        break
    case 5:
        console.log('Viernes')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('No es un día valido')
        break
}

console.groupEnd()