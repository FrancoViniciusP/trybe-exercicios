/* 

## 13 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
    Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
    Valor esperado no retorno da função: 2 .

 */

function repeat() {
    let count1 = 0;
    let count2 = 0;
    let n = 0;
    let i = 0;
    for (let index1 = 0; index1 < numbers.length; index1+=1) {
        for (let index2 = 0; index2 < numbers.length; index2+=1) { 
            if (numbers[index1] == numbers[index2]) {
                count1 += 1;
            };
        };
        if (count1 > count2) {
             count2 = count1;
             i = numbers[index1];
        };
        count1 = 0;
    };
    return i;
};

numbers = [2, 3, 2, 5, 8, 2, 3];
console.log(repeat(numbers));