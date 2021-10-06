'use strict'
let num
do{
    num= prompt('Introduce un número')
}while(isNaN(num))

let isdiv=0;
if(num%2==0){
    document.write(`El numero ${num} es divisible entre 2 <br />`)
    isdiv++
}
if(num%3==0){
    document.write(`El numero ${num} es divisible entre 3 <br />`)
    isdiv++
}
if(num%5==0){
    document.write(`El numero ${num} es divisible entre 5 <br />`)
    isdiv++
}
if(num%7==0){
    document.write(`El numero ${num} es divisible entre 7 <br />`)
    isdiv++
}

document.write(`El número era divisible entre ${isdiv} numeros`)