
// Ejercicio 1 - Calculadora
calculator = 1

while (calculator = 1) {
    console.log("----------Calculadora básica----------")
    console.log("Opciones: ")
    console.log("1. Suma")
    console.log("2. Resta")
    console.log("3. Multiplicación")
    console.log("4. División")
    console.log("5. Salir")
    operacion = Number(prompt("Indique el número de la operación requerida: "))
    if (operacion == 1) {
        let num1 = Number(prompt("Ingrese el primer número a sumar: "))
        while (Number.isNaN(num1)) {
            console.warn("¡Cuidado! El dato ingresado no es un número")
            num1 = Number(prompt("Por favor ingrese un dato numérico: "))
        }
        let num2 = Number(prompt("Ingrese el segundo número a sumar: "))
        while (Number.isNaN(num2)) {
            console.warn("¡Cuidado! El dato ingresado no es un número")
            num2 = Number(prompt("Por favor ingrese un dato numérico: "))
        }
        total = num1 + num2
        console.clear()
        console.log(`La suma de ${num1} y ${num2} es: ${total}`)
    } else if (operacion == 2) {
        let num1 = Number(prompt("Ingrese el minuendo de la resta: "))
        while (Number.isNaN(num1)) {
            console.warn("¡Cuidado! El dato ingresado no es un número")
            num1 = Number(prompt("Por favor ingrese un dato numérico: "))
        }
        let num2 = Number(prompt("Ingrese el sustraendo de la resta: "))
        while (Number.isNaN(num2)) {
            console.warn("¡Cuidado! El dato ingresado no es un número")
            num2 = Number(prompt("Por favor ingrese un dato numérico: "))
        }
        diferencia = Math.abs(num1 - num2)
        console.clear()
        console.log(`La resta de ${num1} y ${num2} es: ${diferencia}`)
    } else if (operacion == 3) {
        let num1 = Number(prompt("Ingrese el primer factor de la multiplicación: "))
        while (Number.isNaN(num1)) {
            console.warn("¡Cuidado! El dato ingresado no es un número")
            num1 = Number(prompt("Por favor ingrese un dato numérico: "))
        }
        let num2 = Number(prompt("Ingrese el segundo factor de la multiplicación: "))
        while (Number.isNaN(num2)) {
            console.warn("¡Cuidado! El dato ingresado no es un número")
            num2 = Number(prompt("Por favor ingrese un dato numérico: "))
        }
        producto = num1 * num2
        console.clear()
        console.log(`El producto de ${num1} y ${num2} es: ${producto}`)
    } else if (operacion == 4) {
        let num1 = Number(prompt("Ingrese el dividendo de la división: "))
        while (Number.isNaN(num1)) {
            console.warn("¡Cuidado! El dato ingresado no es un número")
            num1 = Number(prompt("Por favor ingrese un dato numérico: "))
        }
        let num2 = Number(prompt("Ingrese el divisor de la división: "))
        while (Number.isNaN(num2)) {
            console.warn("¡Cuidado! El dato ingresado no es un número")
            num2 = Number(prompt("Por favor ingrese un dato numérico: "))
        }
        cociente = num1 / num2
        console.clear()
        console.log(`El cociente de ${num1} y ${num2} es: ${cociente}`)
    } else if (operacion == 5) {
        break
    } else {
        console.error("El número ingresado no se encuentra en las opciones")
    }
}

