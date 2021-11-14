/* 
## 15 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
    Valor de teste: 'trybe' e 'be'
    Valor esperado no retorno da função: true
    verificaFimPalavra('trybe', 'be') ;
    Retorno esperado: true
    verificaFimPalavra('joaofernando', 'fernan') ;
    Retorno esperado: false
 */

let arrayWord = [];
let arrayEnding = [];
let stoper = 0;
let result = true;

function compare(word, ending) {
    arrayWord = word.split("");
    arrayEnding = ending.split("");
    stoper = arrayWord.length - arrayEnding.length;
    for( let index = 1; index <= arrayEnding.length; index += 1){
        if (arrayWord[arrayWord.length-index] == arrayEnding[arrayEnding.length-index]){
            result = true;
        } else{
            result = false;
        };
    }; 
    return result;
};

console.log(compare('danielle', 'elle'));