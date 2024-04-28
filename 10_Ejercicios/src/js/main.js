
//Sistema de gestión para Veterinaria

// Definición de funciones

function newRandomId() {
    const id = parseInt(Math.random() * 1000000000000000);
    return id
}

function getAge(date) {
    return Math.abs(
        new Date(Date.now() - date.getTime()).getUTCFullYear() - 1970
    )
}

function getOwners() {
    console.log('Dueños:')
    console.table(owners)
}

function getPets() {
    console.log('Mascotas:')
    console.table(pets)
}

let pets = [
    {
        petName: "Spok",
        petSpecies: "Cat",
        petBreed: "Stray",
        petBirth: new Date("12/07/2019"),
        petWeight: 10,
        petState: "stable",
        nameOwner: "Marc",
        documentOwner: "12932372",
        phoneOwner: "3005555555",
        emailOwner: "marc@gmail.com"
    },
    {
        petName: "Buddy",
        petSpecies: "Dog",
        petBreed: "Golden Retriever",
        petBirth: new Date("05/15/2020"),
        petWeight: 25,
        petState: "healthy",
        nameOwner: "Emily",
        documentOwner: "54321678",
        phoneOwner: "3101234567",
        emailOwner: "emily@example.com"
    },
    {
        petName: "Whiskers",
        petSpecies: "Cat",
        petBreed: "Siamese",
        petBirth: new Date("08/20/2018"),
        petWeight: 8,
        petState: "recovering",
        nameOwner: "Sarah",
        documentOwner: "98765432",
        phoneOwner: "4157890123",
        emailOwner: "sarah@example.com"
    },
    {
        petName: "Rio",
        petSpecies: "Bird",
        petBreed: "Parakeet",
        petBirth: new Date("03/10/2021"),
        petWeight: 0.5,
        petState: "active",
        nameOwner: "Juan",
        documentOwner: "74185296",
        phoneOwner: "2123456789",
        emailOwner: "juan@example.com"
    },
    {
        petName: "Spike",
        petSpecies: "Hedgehog",
        petBreed: "African Pygmy",
        petBirth: new Date("10/02/2020"),
        petWeight: 0.3,
        petState: "hibernating",
        nameOwner: "Alex",
        documentOwner: "36925814",
        phoneOwner: "9178901234",
        emailOwner: "alex@example.com"
    },
    {
        petName: "Lola",
        petSpecies: "Rabbit",
        petBreed: "Dwarf Hotot",
        petBirth: new Date("04/25/2022"),
        petWeight: 1.2,
        petState: "active",
        nameOwner: "Sophia",
        documentOwner: "15935748",
        phoneOwner: "6506789012",
        emailOwner: "sophia@example.com"
    },
    {
        petName: "Gizmo",
        petSpecies: "Ferret",
        petBreed: "Sable",
        petBirth: new Date("11/12/2020"),
        petWeight: 0.7,
        petState: "playful",
        nameOwner: "Michael",
        documentOwner: "24680135",
        phoneOwner: "3234567890",
        emailOwner: "michael@example.com"
    },
    {
        petName: "Ziggy",
        petSpecies: "Snake",
        petBreed: "Ball Python",
        petBirth: new Date("09/30/2019"),
        petWeight: 1.5,
        petState: "shedding",
        nameOwner: "Rachel",
        documentOwner: "80246713",
        phoneOwner: "2126789012",
        emailOwner: "rachel@example.com"
    },
    {
        petName: "Snowball",
        petSpecies: "Guinea Pig",
        petBreed: "Abyssinian",
        petBirth: new Date("06/08/2021"),
        petWeight: 0.8,
        petState: "curious",
        nameOwner: "David",
        documentOwner: "75395146",
        phoneOwner: "2134567890",
        emailOwner: "david@example.com"
    },
    {
        petName: "Bubbles",
        petSpecies: "Fish",
        petBreed: "Goldfish",
        petBirth: new Date("01/14/2020"),
        petWeight: 0.1,
        petState: "swimming",
        nameOwner: "Emma",
        documentOwner: "12345678",
        phoneOwner: "4158901234",
        emailOwner: "emma@example.com"
    }
]

function petsInformation() {
    pets.forEach(pet => {
        console.log(`
        Mascota: ${pet.petName}
        Especie: ${pet.petSpecies}
        Raza: ${pet.petBreed}
        Dueño: ${pet.nameOwner}
        `)
    })
}

function ownerInformation() {
    pets.forEach(pet => {
        console.log(`
        Nombre: ${pet.nameOwner}
        Documento: ${pet.documentOwner}
        Teléfono: ${pet.phoneOwner}
        Dueño de: ${pet.petName}
        `)
    })
}

function getOwnerById(id) {
    return owners.find((o) => o.id === id)
}

function getPetById(id) {
    return pets.find((o) => o.id === id)
}

function getPetAge(id) {
    return getAge(pets.find((p) => p.id === id).birth)
}

function getOwnerPets(id) {
    return pets.filter((p) => p.ownerId === id)
}

function addPet(ownerId, name, species, breed, birth, weight, state) {
    pets.push({
        ownerId,
        name,
        species,
        breed,
        birth,
        weight,
        state,
        id: newRandomId(),
    })
}

function updatePet(id, ownerId, name, species, breed, birth, weight, state) {
    pets.forEach((p) => {
        if (p.id === id) {
            p.ownerId = ownerId;
            p.name = name;
            p.species = species;
            p.breed = breed;
            p.birth = birth;
            p.weight = weight;
            p.state = state;
        }
    })
}

function deletePetById(id) {
    pets = pets.filter((p) => p.id !== id);
}

getOwners()

// addPet(1, 'New Pet', 'Dog', 'Border', new Date('2011,12,10'), 15, 'Cool dog')

// console.table(getOwnerPets(1));

updatePet(
    pets[pets.length - 1].id,
    1,
    'New Pet (Modified)',
    'Dog (Modified)',
    'Border (Modified)',
    new Date('2011,12,10'),
    12,
    'Cool dog (Modified)'
)

console.table(getOwnerPets(1))

getPets();

console.table(getPetById(pets[0].id))

console.info(getPetAge(pets[0].id))

deletePetById(pets[pets.length - 1].id)

console.table(getOwnerPets(1))


// Menú

let option = 0

function displayMenu() {
    return parseInt(prompt(`
    SISTEMA DE GESTIÓN VETERINARIA

    Menú:
    1. Registro de mascota
    2. Ver listado de mascotas
    3. Ver listado de dueños
    4. Buscar mascota por el nombre
    5. Filtrar mascota por el dueño
    6. Actualizar información de una mascota
    7. Eliminar mascota
    8. Salir

    Escriba el número de la opción deseada:
    `))
}

