/* 
## 14 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
    Valor de teste: N = 5 .
    Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

 */

function sum(number) {
    let soma = 0;
    for (n = number; n > 0; n -= 1){
        soma += n;
    };
    return soma;   
};

console.log(sum(5));