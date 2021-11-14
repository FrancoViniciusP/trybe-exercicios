/* 

## 10 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
    Array de teste: [2, 3, 6, 7, 10, 1]; .
    Valor esperado no retorno da função: 4 .

 */

function higher(){
    let n = 0;
    for(let i = 0; i < array.length; i+= 1){
        if (array[i] > n){
            n = array[i];
            index = i;
        };
    };
    return index;
};

array = [2, 3, 6, 7, 10, 1];
console.log(higher(array));