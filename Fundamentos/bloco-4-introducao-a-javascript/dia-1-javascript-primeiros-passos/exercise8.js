/* 8 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

* **Bonus**: use somente um if.  */

let a = 1;
let b = 3;
let c = 6;

let result = (a % 2 == 0 || b % 2 == 0 || c % 2 == 0);

if (result == true){
    console.log(true);
} else {
    console.log(false);
}