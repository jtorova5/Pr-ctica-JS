
// Condicionales simples

const nombre = 'Juan'

console.groupCollapsed('Condicional simple (if): ')
if (nombre == 'Juan') {
    console.log(`Hola ${nombre}`)
}

const edad = 18

if (edad >= 18) {
    console.log(`Eres mayor de edad y puedes votar`)
}
console.groupEnd()

// Condicionales alternativo (if else)

const edadMinimaParaBeber = 18
const miEdad = 19

console.groupCollapsed('Condicional anidado (if else): ')
if ((miEdad < edadMinimaParaBeber) && (miEdad > 0)) {
    console.error(`Tienes ${miEdad} años y quieres beber, estás cometiendo una infracción y pueden multar a tus padres, solo puedes tomar cuando seas mayor de ${edadMinimaParaBeber} años`)
} else {
    console.warn('Puedes beber pero cuidate del ejercito')
}

let user = 'Admin'
let password = '1234'

if (((user).toLowerCase() === 'admin') && (password === '1234')) {
    console.log('Hola lindo, ¡bienvenido!')
} else {
    console.error('¿Quién chota sos? Intenta de nuevo')
}

console.groupEnd()

// Condicionales anidado (if else-if)

let numero = Math.round(Math.random() * (5 - (-5)) + (-5))

console.groupCollapsed('Condicional anidado (if else-if): ')
console.groupCollapsed('Ejercicio 1: ')
if (numero === 0) {
    console.log(`El número ${numero} es un número neutro`)
} else if (numero < 0) {
    console.log(`El número ${numero} es un número negativo`)
} else {
    console.log(`El número ${numero} es un número positivo`)
}
console.groupEnd()

let medioDeTransporte = 'bus'

console.groupCollapsed('Ejercicio 2')
if (medioDeTransporte == 'pie') {
    console.log('Tu viajas a pie')
} else if (medioDeTransporte == 'bicicleta') {
    console.log('Tu viajas en bicicleta')
} else if (medioDeTransporte == 'metro') {
    console.log('Tu viajas en metro')
} else if (medioDeTransporte == 'bus') {
    console.log('Tu viajas en bus')
} else if (medioDeTransporte == 'moto') {
    console.log('Tu viajas en moto')
} else if (medioDeTransporte == 'carro') {
    console.log('Tu viajas en carro')
} else {
    console.log('Tu viajas en un medio de transporte diferente')
}
console.groupEnd()
console.groupEnd()

console.groupCollapsed('Estructura switch: ')
console.groupCollapsed('Ejercicio 1')
switch (medioDeTransporte) {
    case 'pie':
        console.log('Tu viajas a pie')
        break;
    case 'bicicleta':
        console.log('Tu viajas en bicicleta')
    break;
    case 'metro':
        console.log('Tu viajas en metro')
    break;
    case 'bus':
        console.log('Tu viajas en bus')
    break;
    case 'moto':
        console.log('Tu viajas en moto')
    break;
    case 'carro':
        console.log('Tu viajas en carro')
    break;
    default:
        console.log('Viajas en un medio de transporte diferente')
        break;
}
console.groupEnd()

console.groupCollapsed('Ejercicio 2')
console.log(`Elige el número de tu deporte favorito: 
1. Fútbol
2. Baloncesto
3. Tenis
4. Natación
5. Ajedrez
6. Otro
`)

let sport = '2'

switch (sport) {
    case '1':
        console.log('Tu deporte favorito es el fútbol')
        break;
    case '2':
        console.log('Tu deporte favorito es el baloncesto')
        break;
    case '3':
        console.log('Tu deporte favorito es el tenis')
        break;
    case '4':
        console.log('Tu deporte favorito es el natación')
        break;
    case '5':
        console.log('Tu deporte favorito es el ajedrez')
        break;
    default:
        console.log('Te gusta un deporte diferente')
        break;
}
console.groupEnd()
console.groupEnd()

// Ciclo for

let repeticiones = 10

console.groupCollapsed('Ciclo for: ')
console.groupCollapsed(`Números del 0 al ${repeticiones}: `)
for (let i = 0; i <= 10; i += 1) {
    console.log(`${i}`)
}
console.groupEnd()

// Tabla de multiplicar del 2

let factor = 2

console.groupCollapsed(`Tabla de multiplicar del ${factor}: `)
for (let i = 0; i <= 10; i += 1) {
    console.log(`${factor} * ${i} = ${factor * i}`)
}
console.groupEnd()
console.groupEnd()

// Ciclo while

console.groupCollapsed('Ciclo while: ')

