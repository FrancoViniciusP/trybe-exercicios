const readline = require('readline-sync');

const weigth = readline.questionFloat('Qual o seu peso em kg?');
const height = readline.questionFloat('Qual sua altura em metros?');  

const imcCalc = (weight, height) => {
    const imc = weight / height**2;
    return `IMC = ${imc} e sua situação é ${imcTable(imc)}`;
}

const imcTable = (imcValue) => {
    if (imcValue < 18.5) return 'Abaixo do peso (magreza)';
    if (imcValue > 18.5 && imcValue < 24.9) return 'Peso normal';
    if (imcValue > 24.9 && imcValue < 29.9) return 'Acima do peso (sobrepeso)';
    if (imcValue > 29.9 && imcValue < 34.9) return 'Obesidade grau I';
    if (imcValue > 34.9 && imcValue < 39.9) return 'Obesidade grau II';
    else return 'Obesidade graus III e IV';    
}

console.log(imcCalc(weigth, height));