// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let numbers = [];
let div = [];

for (let i = 0; i < 25; i += 1) {
    numbers.push(i+1);
}

for (let temp of numbers){
    div.push(temp/2);
}

console.log(div);