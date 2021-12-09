/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com . */


const names = ['Pedro Guerra', 'Luiza Drumond', 'Carla Paiva', 'Chico Buarque', 'Caetano Veloso', 'Lulu Santos', 'Luan Santana', 'Pablo Vittar', 'Gilberto Gil'];

const newEmployees = (nome) => {
    const employees = {
      //id1: newEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      //id2: newEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      //id3: newEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    for (let i = 0; i < names.length; i += 1) {
        employees[`id${i+1}`] = newEmail(names[i]);
    }
    
      
    
    return employees;
  };

const newEmail = (name) => {
    let mail = name.toLowerCase().replace(/ /g,"_");
    return {
        nomeCompleto: name,
        email: `${mail}@trybe.com`,
    };
};  

console.table(newEmployees());

