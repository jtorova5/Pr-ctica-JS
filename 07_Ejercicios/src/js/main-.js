
// 1. Crea un objeto llamado persona con propiedades como nombre, edad y ciudad

let person = {
    userName: 'jhonatan',
    age: 26,
    city: 'medellín'
}

console.groupCollapsed('Ejercicio 1: ')

console.log(person)

console.groupEnd()

// 2. Agrega una propiedad adicional al objeto persona que represente su ocupación

person.job = 'estudiante'

console.groupCollapsed('Ejercicio 2: ')

console.log(person)

console.groupEnd()

// 3. Accede a una propiedad del objeto persona y muestra su valor en la consola

let properties = {
    userName,
    age,
    city,
    job
} = person

console.groupCollapsed('Ejercicio 3: ')

console.log(`Nombre: ${userName}`)
console.log(`Edad: ${age}`)
console.log(`Ciudad: ${city}`)
console.log(`Trabajo: ${job}`)

console.groupEnd()

// 4. Crea otro objeto llamado libro con propiedades como título, autor y año de publicación

let book = {
    title: '100 años de soledad',
    author: 'Gabo',
    year: 1982
}

console.groupCollapsed('Ejercicio 4: ')

console.log(book)

console.groupEnd()

// 5. Combina las propiedades de los objetos persona y libro en un nuevo objeto llamado información


let information = {...person, ...book}

console.groupCollapsed('Ejercicio 5: ')

console.log(information)

console.groupEnd()

// 6. Cambia el valor de una propiedad en el objeto persona

person.userName = 'nick'
person.age = 18

console.groupCollapsed('Ejercicio 6: ')

console.log(person)

console.groupEnd()

// 7. Elimina una propiedad del objeto libro

delete book.year
// book.year = undefined

console.groupCollapsed('Ejercicio 7: ')

console.log(book)

console.groupEnd()

// 8. Crea un objeto llamado coche con propiedades como modelo, marca y año

let car = {
    model: 'sandero',
    brand: 'renault',
    carYear: 2015
}

console.groupCollapsed('Ejercicio 8: ')

console.log(car)

console.groupEnd()

// 9. Muestra todas las propiedades del objeto coche en la consola

let carProperties = {
    model,
    brand,
    carYear
} = car

console.groupCollapsed('Ejercicio 9: ')

console.log(`Modelo: ${model}`)
console.log(`Marca: ${brand}`)
console.log(`Año: ${carYear}`)

console.groupEnd()

// 10. Agrega un método al objeto coche que imprima un mensaje en la consola

car.message = function () {
    console.log(`Soy un ${model} del año ${carYear}`)
}

console.groupCollapsed('Ejercicio 10: ')

console.log(car)
car.message()

console.groupEnd()

// 11. Crea un objeto llamado circulo con propiedades como radio y color

let circle = {
    radius: 10,
    color: 'blue'
}

console.groupCollapsed('Ejercicio 11: ')

console.log(circle)

console.groupEnd()

// 12. Calcula el área del círculo utilizando la fórmula A = πr² y muestra el resultado

let area = (Math.PI * ((circle.radius) ** 2)).toFixed(2)

console.groupCollapsed('Ejercicio 12: ')

console.log(`El aŕea de un círculo de radio ${circle.radius} es de ${area}`)

console.groupEnd()

// 13. Crea un objeto llamado rectangulo con propiedades como ancho y alto

let rectangle = {
    width: 10,
    height: 5
}

console.groupCollapsed('Ejercicio 13: ')

console.log(rectangle)

console.groupEnd()

// 14. Calcula el perímetro del rectángulo utilizando la fórmula P = 2 * (ancho + alto) y muestra el resultado

let rectanglePerimeter = Math.round(2 * (rectangle.width + rectangle.height))

console.groupCollapsed('Ejercicio 14: ')

console.log(`El perímetro de un rectángulo de ancho ${rectangle.width} y de alto ${rectangle.height} es de ${rectanglePerimeter}`)

console.groupEnd()

// 15. Combina las propiedades de los objetos circulo y rectangulo en un nuevo objeto llamado formas

let forms = {...circle, ...rectangle}

console.groupCollapsed('Ejercicio 15: ')

console.log(forms)

console.groupEnd()

// 16. Crea un objeto llamado computadora con propiedades como marca, modelo y precio

let computer = {
    computerBrand: 'msi',
    computerModel: 2024,
    computerPrice: 4000000
}

console.groupCollapsed('Ejercicio 16: ')

console.log(computer)

console.groupEnd()

// 17. Muestra el precio de la computadora en la consola

console.groupCollapsed('Ejercicio 17: ')

console.log(`Precio: $${computer.computerPrice}`)

console.groupEnd()

// 18. Agrega una propiedad al objeto computadora que indique si tiene o no una tarjeta gráfica

computer.graphicCard = true

console.groupCollapsed('Ejercicio 18: ')

console.log(computer)

console.groupEnd()

// 19. Crea un objeto llamado mascota con propiedades como nombre, especie y edad

let pet = {
    petName: 'Grecia',
    petBreed: 'mestiza',
    petAge: 3
}

console.groupCollapsed('Ejercicio 19: ')

console.log(pet)

console.groupEnd()

// 20. Muestra en la consola la especie de la mascota en  mayúsculas

console.groupCollapsed('Ejercicio 20: ')

console.log(`Especie: ${(pet.petBreed).toUpperCase()}`)

console.groupEnd()

// 21. Crea un objeto llamado fruta con propiedades como nombre y color

let fruit = {
    fruitName: 'sandia',
    fruitColor: 'verde'
}

console.groupCollapsed('Ejercicio 21: ')

console.log(fruit)

console.groupEnd()

// 22. Agrega un método al objeto fruta que imprima un mensaje indicando si la fruta está madura

fruit.expiration = function () {
    console.log('La fruta está madura')
}

console.groupCollapsed('Ejercicio 22: ')

console.log(fruit)
fruit.expiration()

console.groupEnd()

// 23. Crea un objeto llamado estudiante con propiedades como nombre, edad y calificaciones

let student = {
    studentName: 'majo traidora',
    studentAge: 19,
    studentGrades: {
        spanish: 4,
        english: 5,
        maths: 5
    }
}

console.groupCollapsed('Ejercicio 23: ')

console.log(student)

console.groupEnd()

// 24. Muestra en la consola el promedio de las calificaciones del estudiante

let {studentGrades: {
    spanish,
    english,
    maths
}} = student
let prom = ((spanish + english + maths) / 3).toFixed(1)

console.groupCollapsed('Ejercicio 24: ')

console.log(`Promedio de calificaciones: ${prom}`)

console.groupEnd()

// 25. Agrega una propiedad al objeto estudiante que indique si ha aprobado o no

let approved = (prom >= 3)

if (approved) {
    student.approved = true
} else if (!approved) {
    student.approved = false
}

console.groupCollapsed('Ejercicio 25: ')

console.log(student)

console.groupEnd()

// 26. Crea un objeto llamado bolsa con propiedades como tamaño y color

let bag = {
    bagSize: 'normal',
    bagColor: 'black'
}

console.groupCollapsed('Ejercicio 25: ')

console.log(bag)

console.groupEnd()

// 27. Muestra en la consola un mensaje que indique la capacidad de la bolsa (tamaño)

console.groupCollapsed('Ejercicio 27: ')

console.log(`Tamaño: ${bag.bagSize}`)

console.groupEnd()

// 28. Agrega un método al objeto bolsa que cambie su color

bag.changeColor = function () {
if (bag.bagColor == 'black') {
    bag.bagColor = 'white'
} else {
    bagColor = 'black'
}}

console.groupCollapsed('Ejercicio 28: ')

console.log('Antes del cambio: ')
console.log(`Color: ${bag.bagColor}`)
bag.changeColor()
console.log('Después del cambio: ')
console.log(`Color: ${bag.bagColor}`)

console.groupEnd()

// 29. Crea un objeto llamado telefono con propiedades como marca, modelo y sistema operativo

let phone = {
    phoneBrand: 'redmi',
    phoneModel: 'note 11',
    phoneOS: 'android'
}

console.groupCollapsed('Ejercicio 29: ')

console.log(phone)

console.groupEnd()

// 30. Muestra en la consola un mensaje indicando el sistema operativo del teléfono

console.groupCollapsed('Ejercicio 30: ')

console.log(`El teléfono ${phone.phoneBrand} ${phone.phoneModel} tiene un sistema operativo ${phone.phoneOS}`)

console.groupEnd()

// 31. Agrega una propiedad al objeto telefono que represente la cantidad de memoria RAM

phone.phoneRAM = '8 gb'

console.groupCollapsed('Ejercicio 31: ')

console.log(phone)

console.groupEnd()

// 32. Crea un objeto llamado animal con propiedades como tipo y sonido

let animal = {
    animalType: 'mamíferos',
    animalSound: 'uhhh'
}

console.groupCollapsed('Ejercicio 32: ')

console.log(animal)

console.groupEnd()

// 33. Muestra en la consola un mensaje que indique el sonido del animal

console.groupCollapsed('Ejercicio 33: ')

console.log(`Sonido: ${animal.animalSound}`)

console.groupEnd()
 
// 34. Agrega un método al objeto animal que imprima un mensaje indicando su tipo y sonido

animal.animalInformation = function () {
    console.log(`Los ${animal.animalType} hacen "${animal.animalSound}"`)
}

console.groupCollapsed('Ejercicio 34: ')

animal.animalInformation()

console.groupEnd()

// 35. Crea un objeto llamado vuelo con propiedades como aerolínea, número de vuelo y hora de salida

let flight = {
    flightAirline: 'avianca',
    flightNumber: '0094',
    flightDeparture: new Date('2024-04-24 14:00:00')
}

console.groupCollapsed('Ejercicio 35: ')

console.log(flight)

console.groupEnd()

// 36. Muestra en la consola un mensaje que indique la aerolínea y el número de vuelo

console.groupCollapsed('Ejercicio 36: ')

console.log(`Aerolinea: ${flight.flightAirline}
Número de vuelo: ${flight.flightNumber}`)

console.groupEnd()

// 37. Agrega una propiedad al objeto vuelo que represente el destino del vuelo

flight.flightDestination = 'pereira'

console.groupCollapsed('Ejercicio 37: ')

console.log(flight)

console.groupEnd()

// 38. Crea un objeto llamado jugador con propiedades como nombre, equipo y posición

let player = {
    playerName: 'bryan león',
    playerTeam: 'deportivo independiente medellín',
    playerPosition: 'delantero'
}

console.groupCollapsed('Ejercicio 38: ')

console.log(player)

console.groupEnd()

// 39. Muestra en la consola un mensaje que indique el nombre y el equipo del jugador

console.groupCollapsed('Ejercicio 39: ')

console.log(`Nombre: ${player.playerName}
Equipo: ${player.playerTeam}`)

console.groupEnd()

// 40. Agrega un método al objeto jugador que imprima un mensaje indicando su posición en el equipo

player.playerInformation = function () {
    console.log(`El jugador ${player.playerName} del ${player.playerTeam} juega como ${player.playerPosition}`)
}

console.groupCollapsed('Ejercicio 40: ')

player.playerInformation()

console.groupEnd()
