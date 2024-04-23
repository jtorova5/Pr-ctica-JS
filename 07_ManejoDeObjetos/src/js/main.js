
const coderRiwi = {
    name: 'jhonatan',
    lastName: 'combita',
    birthDate: new Date("1997-03-10 18:00:00"),
    rh: 'O+',
    location: {
        country: 'colombia',
        state: 'cundinamarca',
        city: 'medellín',
        neighborhood: 'belén',
        street: '15C',
        address: 'Cl 15C...',
        postalCode: 3453
    },
    phone: 3045847437,
    skills: ['python', 'html5', 'css', 'EcmaScript'],
    email: 'jtorova5@gmail.com',
    saludar: function () {
        console.log(`hola mundo soy ${this.name} ${this.lastName}, este es mi correo: ${this.email}`)
    }
}

// Extracting information from an object

console.groupCollapsed('Extracting information from an object: ')

console.log(coderRiwi.name)
console.log(coderRiwi['name'])
console.log(coderRiwi.location.address)
console.log(coderRiwi['location']['address'])
console.log(coderRiwi.skills[2])

console.groupEnd()

// Adding information to an object

console.groupCollapsed('Adding information to an object: ')

coderRiwi['documentType'] = 'Cédula de ciudadanía'
coderRiwi.idNumber = 1036402695
// coderRiwi.clan = 'Linux'

// Adding a property with permission

Object.defineProperty(coderRiwi, 'clan', {
    value: true,
    writable: false,  // permite modificar la propiedad
    enumerable: true,  // permite que la propiedad aparezca
    configurable: false  // permite que la propiedad sea eliminada
})

// coderRiwi.emergencyContact = {
//     contactName: 'jairo toro',
//     phoneNumber: 3146329488,
//     optionalPhoneNumber: 3004803582
// }

// Object.assign(coderRiwi, {
//     contactName: 'jairo toro',
//     phoneNumber: 3146329488,
//     optionalPhoneNumber: 3004803582
// })

Object.defineProperty(coderRiwi, 'emergencyContact',{
    value: {
    contactName: 'jairo toro',
    phoneNumber: 3146329488,
    optionalPhoneNumber: 3004803582
    },
    writable: false,  // permite modificar la propiedad
    enumerable: true,  // permite que la propiedad aparezca
    configurable: true  // permite que la propiedad sea eliminada
})

console.log(coderRiwi)

console.groupEnd()

// Updating information

console.groupCollapsed('Updating information: ')

coderRiwi['postalCode'] = 5237
coderRiwi.clan = 'Gates'

console.groupEnd()

// Deleting information

console.groupCollapsed('Deleting information: ')

delete coderRiwi.clan
coderRiwi.clan = undefined

console.groupEnd()

// Objects addition

console.groupCollapsed('Objects addition: ')

const obj1 = {
    a: "uno",
}
const obj2 = {
    b: "dos",
}
const obj3 = {
    a: "uno",
}
const obj4 = {
    b: "dos",
}

const objectsAddition = Object.assign(obj1, obj2)
console.log(objectsAddition)

console.log('Objeto 1:', obj1)
console.log('Objeto 2:', obj2)
console.log('Suma:',objectsAddition)

const objectsAddition2 = {...obj3, ...obj4}

console.log('Objeto 3:', obj3)
console.log('Objeto 4:', obj4)
console.log('Suma:',objectsAddition2)

console.groupEnd()

// Desestructuración de objetos

console.groupCollapsed('Objects destructuring: ')

const objectExample1 = {
    userName: 'jhonatan toro',
    userEmail: 'jtorova5@gmail.com',
    userPassword: '123'
}

// Forma manual

// let userName = objectExample1.userName
// let userEmail = objectExample1.email
// let userPassword = objectExample1.userPassword

// console.log(userName)
// console.log(userEmail)
// console.log(userPassword)

let {
    userName, 
    userEmail, 
    userPassword
} = objectExample1
    
console.log(userName)
console.log(userEmail)
console.log(userPassword)

// Sacar información con nombre diferente

let { userName: user, userEmail: email, userPassword: password} = objectExample1

console.log(user)
console.log(email)
console.log(password)

// Desestructuración anidada

// ¿Cómo sacar listas directamente con la desestructuración?




