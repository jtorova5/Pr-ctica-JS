
const listFruits = [
    "apple",
    "orange",
    "banana",
    "grape",
    "strawberry",
    "kiwi",
    "pineapple",
    "watermelon",
    "mango",
    "pear",
    "peach",
    "plum",
    "cherry",
    "blueberry",
    "raspberry",
    "blackberry",
    "lemon",
    "lime",
    "coconut",
    "pomegranate"
]

// For - simple

console.groupCollapsed('For - simple: ')

for (let i = 0; i < listFruits.length; i += 1) {
    console.info(listFruits[i])
}

console.groupEnd()

// For each

console.groupCollapsed('For each - simpler: ')

listFruits.forEach(fruit => {
    console.info(fruit)
})

console.groupEnd()

// Práctica

const employeeList = [
    "John Smith",
    "Mary Johnson",
    "Carlos Martinez",
    "Anna Garcia",
    "Louis Brown",
    "Laura Davis",
    "Peter Miller",
    "Sophia Wilson",
    "Javier Lopez",
    "Helen Anderson",
    "Diego Thomas",
    "Lucy Hernandez",
    "Paul Young",
    "Carmen King",
    "Andrew Scott",
    "Rose Adams",
    "Martha Nelson",
    "David Hill",
    "Sarah Baker",
    "Beatrice Perez"
]

console.groupCollapsed('Práctica: ')

// For - simple

console.groupCollapsed('For - simple: ')

for (let i = 0; i < employeeList.length; i += 1) {
    console.info(employeeList[i])
}

console.groupEnd()

// For each

console.groupCollapsed('For each - simpler: ')

employeeList.forEach(employee => {
    console.info(employee.toUpperCase())
})

console.groupEnd()
console.groupEnd()

// For each with objects

const coderRiwi = {
    id: '1036402699',
    name: 'jhonatan',
    lastName: 'toro vásquez',
    height: 178,
    weight: 84,
    gender: 'male',
    birthDate: Date('03/10/1997'),
    country: 'colombia',
    email: 'jtorova5@gmail.com'
}

console.groupCollapsed('For each with objects: ')

Object.keys(coderRiwi).forEach(key => {
    console.info(coderRiwi[key])
})

console.groupEnd()


// For in

console.groupCollapsed('For in: ')

for (const key in coderRiwi) {
    console.info(coderRiwi[key])
}

console.groupEnd()

// For of - Compatible con listas, no con objetos

listaEmpleados = [
    {
        nombre: "Juan Pérez",
        edad: 30,
        puesto: "Desarrollador de Software",
        salario: 50000
    },
    {
        nombre: "María García",
        edad: 28,
        puesto: "Diseñadora Gráfica",
        salario: 45000
    },
    {
        nombre: "Luis Ramírez",
        edad: 35,
        puesto: "Gerente de Proyectos",
        salario: 60000
    },
    {
        nombre: "Ana Martínez",
        edad: 32,
        puesto: "Analista de Negocios",
        salario: 55000
    }
]

console.groupCollapsed('For of: ')

for (const empleado of listaEmpleados) {
    console.info(`${empleado.nombre}`)
}

console.groupEnd()

// Map - Devuelve un nuevo array

const listNumbers = [2, 5, 78, 4, 9]

console.groupCollapsed('Map: ')

const numeroMultiplicado = listNumbers.map(number => {
    console.info(`${number} * 2 = ${number * 2}`)
    return number * 2
})

console.groupEnd()

// Imprimir los números del 1 al 100 y guardar los pares

let numbers = []

for (let i = 0; i <= 100; i += 1) {
    numbers.push(i)
}
console.log(numbers)

const pares = numbers.map(number => {
    if (number % 2 == 0) {
        return number
    } else {
        return ''
    }
})

console.log(pares)