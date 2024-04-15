
let userName = "Jhonatan"
let lastName = "Toro"
let age = 26
let email = "jtorova5@gmail.com"
let address = "Calle 15C #82 BB 65"
let cellphone = "3044355739"

// Modificando el DOM
document.write(`Hola ${userName} ${lastName}, tienes ${age} años`)
document.write(`email: ${email}`)
document.write(`Dirección: ${address}`)
document.write(`Celular: ${cellphone}`)

// Diferentes consoles con estilos + agrupación
console.groupCollapsed("Different console logs")

console.log(`%c${userName}`, "background-color: #569DD6; border-radius: 50px; font-weight: bold; padding-top: 5px; padding-right: 8px; padding-bottom: 5px; padding-left: 8px;")
console.error(`%c${lastName}`, "background-color: #FF5252; border-radius: 50px; font-weight: bold; padding-top: 5px; padding-right: 8px; padding-bottom: 5px; padding-left: 8px;")
console.warn(`%c${age}`, "background-color: #FFFE52; border-radius: 50px; font-weight: bold; padding-top: 5px; padding-right: 8px; padding-bottom: 5px; padding-left: 8px; color: black;")
console.debug(email)
console.info(`%c${address}`, "background-color: #52FF94; border-radius: 50px; font-weight: bold; padding-top: 5px; padding-right: 8px; padding-bottom: 5px; padding-left: 8px; color: black;")
console.log(`%c${cellphone}`, "background-color: #569DD6; border-radius: 50px; font-weight: bold; padding-top: 5px; padding-right: 8px; padding-bottom: 5px; padding-left: 8px;")

console.groupEnd()

// Concatenación + agrupación
console.groupCollapsed("Data basic information")

console.log("User name: " + userName)
console.warn("Last name:", lastName)
console.error(`Age: %c${age}`, "background-color: #FF5252; border-radius: 50px; font-weight: bold; padding-top: 5px; padding-right: 8px; padding-bottom: 5px; padding-left: 8px;")

console.groupEnd()

console.groupCollapsed("Data basic contact information")

console.log(`email: %c${email}`, "background-color: #569DD6; border-radius: 50px; font-weight: bold; padding-top: 5px; padding-right: 8px; padding-bottom: 5px; padding-left: 8px;")
console.warn(`Address: %c${address}`, "background-color: #FFFE52; border-radius: 50px; font-weight: bold; padding-top: 5px; padding-right: 8px; padding-bottom: 5px; padding-left: 8px; color: black;")
console.error(`Cellphone: %c${cellphone}`, "background-color: #FF5252; border-radius: 50px; font-weight: bold; padding-top: 5px; padding-right: 8px; padding-bottom: 5px; padding-left: 8px;")

console.groupEnd()

// Mostrando listas
listCodersGates = ['Jhonatan Toro', 'MariaJose Pino', 'Mateo Montoya']

console.info(listCodersGates)
console.table(listCodersGates)


