const myName = "Vinicius"; //const não pode ser alterado.
const birthCity = "Serra"; // "" representam strings.
let birthYear = 1995; // let aceita alterações.

birthYear = 2001;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

/* ------------------- */// Variáveis

let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId); // imprime o tipo da variável.
console.log(typeof patientAge);

/* ----------------- */ // Operadores matemáticos

let base = 5;
let height = 8;
let area = base * height;
let perimeter = 2*base + 2*height;

console.log(typeof area);
console.log(area);
console.log(perimeter);


/* ---------------- */ // Condição If e Else 
const challengeGrade = 61;

if (challengeGrade >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
}
else if (challengeGrade < 80 && challengeGrade >= 60) {
  console.log("Você está na nossa lista de espera!");
}
else {
  console.log("Você foi reprovada(o)!");
}

/* --------------- */// Operador AND &&

const currentHour = 21;
let message

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir.";
}
else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D.";
} 
else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço.";
}
else if (currentHour >= 4 && currentHour < 11) {
  message = "Hmmm, cheiro de café recém passado.";
}

console.log(message);

/* --------------- */// Operador OR ||

let weekDay = "quarta-feira";

if (weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}
else {
  console.log("FINALMENTE, descanso merecido UwU")
}

/* ---------------- */// Operador NOT !, inverte o valor booleano da variável

console.log((2 + 2) === 4);
console.log((!2 + 2) === 4);

/* ---------------- */// Switch e case

let trafficLight = "roxo";
let testResult = "reprovada";

switch (trafficLight) {
  case "vermelho":
    console.log("PARE");
    break;

  case "amarelo":
    console.log("ATENÇÃO");
    break;
  
  case "verde":
    console.log("SIGA");
    break;
  default:
    console.log("Cor inválida");
}

switch (testResult) {
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;
  case "lista":
    console.log("Você está na nossa lista de espera!");
    break;
  case "reprovada":
    console.log("Você foi reprovada(o)!");
    break;
  default:
    console.log("Não se aplica");
}
