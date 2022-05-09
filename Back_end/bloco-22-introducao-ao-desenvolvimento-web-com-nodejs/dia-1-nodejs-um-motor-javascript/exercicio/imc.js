const readline = require('readline-sync');

const weigth = readline.questionFloat('Qual o seu peso em kg?');
const height = readline.questionFloat('Qual sua altura em metros?');  

const imcCalc = (weight, height) => {
    return weight / height**2
}

console.log(imcCalc(weigth, height));