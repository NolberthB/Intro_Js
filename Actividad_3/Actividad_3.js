// Ejercicios de If / else 

// 1.- Solicitar al usuario un numero, y determinar si es divicible entre dos o no. Mostrando al usuario un mensaje de "x nummero es divicible entre 2" o "x numero no es divicible entre 2".
// pendiente
let num = Number(prompt('Ingresa un numero: '))

if (num % 2 == 0) {
    alert( num + ' es divicible entre 2')
}else {
    alert( num + ' no es divicible entre 2')
}

// 2.- Crea un programa quue determine si un numero introducido en un prompt es par o no, la respuesta será mostrada en un alert 

let num = Number(prompt('Introduce un numero: '))

if (num % 2 == 0) {
    alert( num + ' es par')
}else {
    alert( num + ' no es par')
}


// 3.- Solicitar al usuario un numero. Si el numero es el 100, imprimir "Ganaste un premio", en caso contrario mostrar el numero y el mensaje "Lo sentimos, sigue participando"

let num = Number(prompt('Ingrese un numero: '))

if (num == 1000) {
    alert('Ganaste un premio')
}else {
    alert('Lo sentimos, sigue participando')
}

// 4.- Solicitar al usuario dos numeros y mostrar cual de los dos es menor. No considerar el caso en que ambos numeros son iguales.

let num1 = Number(prompt('Ingrese el primer numero: '))
let num2 = Number(prompt('Ingrese el segundo numero: '))

if (num1 < num2 ) {
    alert('El numero ' + num1 + ' es menor que ' + num2)
}else {
    alert('El numero ' + num2 + ' es menor que ' + num1)
}

// 5.- Solicitar al usuario que ingrese tres numero y mostrar cual de los tres es el numero mayor. Considerar el caso en que 2 numeros sean iguales.

let num1 = Number(prompt('Ingrese el primer numero: '))
let num2 = Number(prompt('Ingrese el segundo numero: '))
let num3 = Number(prompt('Ingrese el tercer numero: '))


if (num1 == num2 && num1 == num3){
    alert("Los tres nummeros son iguales: "+num1);
} else if (num1 > num3){
    if (num1 > num2){
        alert("El numero uno es mayor "+num1);
    }else{
        alert("El numero dos mayor: "+num2);
    }
} else {
    alert("El numero tres es mayor: "+num3);
}


// Ejercicio 6


    let name = prompt('What are u name?')
    let age = Number(prompt('How old are you?'))

    let c ='carlos'
    let m = 'mario'

    
    if(age >= 18) {
        if(name == m && name == c){
            alert('Hello ' +name+ ', you have a vip pass.')
        }else {
            alert('Hello ' +name+ ' ')
        }
    }else {
        alert('Sorry, ' +name+ ' you can´t enter you are underage.')
    }


