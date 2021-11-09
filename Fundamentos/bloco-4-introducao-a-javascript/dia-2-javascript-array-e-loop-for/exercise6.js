
let numbers = [6, 10, 4, 20, 70, 8, 100, 2, 36, 27];

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let odd = 0;

for(let i of numbers) {
    if (i % 2 != 0) {
        odd += 1;
    }
}

if (odd === 0) {
    console.log('Nenhum valor ímpar encontrado.')
} else {
    console.log('Existem ' + odd + ' números impares');
}