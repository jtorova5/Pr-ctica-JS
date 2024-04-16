
// Declaración de strings
let comillaSimple = 'hola "mundo"'
let comillasDobles = "hola 'mundo'"
let stringTemporal = 138721489

const mensaje1 = 'soy un'
const mensaje2 = String('hola')
const mensaje3 = new String("mundo")

const fullName = 'Jhonatan Toro Vásquez'
const cantidadDeCaracteres = fullName.length

console.groupCollapsed('Declaración de strings: ')
console.info(comillaSimple)
console.info(comillasDobles)
console.info(stringTemporal)
console.info(mensaje1)
console.info(mensaje2)
console.info(mensaje3)
console.info(`La cantidad de caracteres es: ${cantidadDeCaracteres}`)
console.groupEnd()

// Extracción de caracteres
let extraccionDeLetraT = fullName[9]
let extraccionDeLetraTV2 = fullName.charAt(9)

console.groupCollapsed('Extracción de caracteres: ')
console.info(`Extracción normal: ${extraccionDeLetraT}`)
console.info(`Extracción con chartAt: ${extraccionDeLetraTV2}`)

console.info(fullName[0])
console.info(fullName[1])
console.info(fullName[2])
console.info(fullName[3])
console.info(fullName[4])
console.info(fullName[5])
console.info(fullName[6])
console.info(fullName[7])

console.error('Salto')

console.info(fullName.charAt(0))
console.info(fullName.charAt(1))
console.info(fullName.charAt(2))
console.info(fullName.charAt(3))
console.info(fullName.charAt(4))
console.info(fullName.charAt(5))
console.info(fullName.charAt(6))
console.info(fullName.charAt(7))
console.groupEnd()

// Inserción de texto en la página web

let userName = "Jhonatan"
let lastName = "Toro"
let age = 26
let email = "jtorova5@gmail.com"
let address = "Calle 15C #82 BB 65"
let cellphone = "3044355739"

console.groupCollapsed('Uso de backticks: ')
console.info(`Hola mundo, Mi nombre es ${userName} ${lastName} y mi correo es: ${email}`)
console.groupEnd()

const header = `
<header>
    <h1>Hola mundo!</h1>
    <p>Mi nombre es <Strong>${userName} ${lastName}</Strong> y mi correo es: ${email}</p>
    <p>Datos:</p>
    <ul>
        <li>Nombre: ${userName}</li>
        <li>Apellido: ${lastName}</li>
        <li>Edad: ${age}</li>
        <li>email: ${email}</li>
        <li>Dirección: ${address}</li>
        <li>Celular: ${cellphone}</li>
    </ul>
</header>
`
document.write(header)

// Transformaciones
const mensaje = 'hola mundo'

console.groupCollapsed('Transformaciones: ')
console.info(mensaje.toUpperCase())
console.info(mensaje.toLowerCase())
console.groupEnd()

document.write(mensaje)