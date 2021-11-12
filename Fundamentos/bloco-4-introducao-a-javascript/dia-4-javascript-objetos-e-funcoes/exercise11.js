/* 
## 11 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
    Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
    Valor esperado no retorno da função: 6 .
 */

function lower(){
    let n = Infinity;
    for(let i = 0; i < array.length; i+= 1){
        if (array[i] < n){
            n = array[i];
            index = i;
        };
    };
    return index;
};

array = [2, 4, 6, 7, 10, 0, -3];
console.log(lower(array));