/* 9 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

* **Bonus**: use somente um if. */

let a = 2;
let b = 4;
let c = 1;

let result = (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0);

if (result == true){
    console.log(true);
} else {
    console.log(false);
}