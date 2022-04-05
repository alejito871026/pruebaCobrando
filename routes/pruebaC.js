const express = require('express');
const router = express.Router();
const leer = require ('readline-sync');
let operacion = ''
function suma (a,b){
    return parseInt(a)+parseInt(b)
}
function resta (a,b){
    return parseInt(a)-parseInt(b)
}
function Multiplicacion (a,b){
    return parseInt(a)*parseInt(b)
}
function Division (a,b){
    return parseInt(a)/parseInt(b)
}
function calculadora (){
    do {
        console.log('1. Suma')
        console.log('2. Resta')
        console.log('3. Multiplicacion')
        console.log('4. Division')
        console.log('5. Salir')
        operacion = leer.question('operacion a realizar, digita el nuemro de la operacion   ')
        let a = 0
        let b = 0
        if(operacion!=5){
            switch (operacion) {                
                case '1':
                    a = leer.question('ingresa el primer numero de la suma  ')
                    b = leer.question('ingresa el segundo numero de la suma  ')
                    const r  =suma(a,b) 
                    console.log('La respuesta es: '+r +'\n')
                    break;
                case'2':
                    a= leer.question('ingresa el primer numero de la resta  ')
                    b = leer.question('ingresa el segundo numero de la resta  ')
                    console.log('La respuesta es: '+resta(a,b)+'\n')
                    break;
                case '3':                  
                    a = leer.question('ingresa el primer numero de la multiplicacion  ')
                    b = leer.question('ingresa el segundo numero de la multiplicacion  ')
                    console.log('La respuesta es: '+Multiplicacion(a,b)+'\n')
                    break;
                case '4':
                    a = leer.question('ingresa el primer numero de la division  ')
                    b = leer.question('ingresa el segundo numero de la division  ')
                    console.log('La respuesta es: '+Division(a,b)+'\n')
                    break;
                default:
                    break;
            }
        }
    } while (operacion!=5);  
}
//calculadora()
function primo(numero) {
    if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return numero+' No es primo';
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return numero + ' Es primo';
  }
function numerosPrimos(){
    for(let i = 1; i <= 100; i++)
        console.log(primo(i))
}
//numerosPrimos()
function definirPalabra(palabra){
    const alrevez = palabra.split("").reverse().join("");
    return alrevez === palabra ? "es palindromo" : "no es palindromo";
}
function palindrome(){
    let palabra = leer.question('Escriba la palabra y el sistema le dira si es palindrome  ')
    console.log(definirPalabra(palabra))
}
//palindrome()
function menu(){
    do {    
        console.log('\n')    
        console.log('ESTAS SON LAS FUNCIONES QUE REALIZA EL SISTEMA')    
        console.log('\n')    
        console.log('1. Calculadora')
        console.log('2. Numeros primos del 1 al 100')
        console.log('3. Palindromo')
        console.log('4. Salir')
        console.log('\n')    
        operacion = leer.question('Funcion a realizar, digita el numero de la funcion   ')
        if(operacion!=4){
            switch (operacion) {                
                case '1':
                    calculadora()
                    break;
                case'2':
                    numerosPrimos()
                    break;
                case '3':                  
                    palindrome()
                    break;
                default:
                    break;
            }
        }
    } while (operacion!=4); 
}
menu()
module.exports = router;