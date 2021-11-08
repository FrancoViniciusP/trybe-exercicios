/* 5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

* Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro. */

let a = 60;
let b = 61;
let c = 59;
 
if (a + b + c === 180){
    console.log(a + b + c === 180);
} else {
    console.log ("A soma dos angulos não é equivalente a um triângulo");
}

