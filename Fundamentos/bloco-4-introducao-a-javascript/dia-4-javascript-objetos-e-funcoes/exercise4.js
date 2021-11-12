/* ## Parte I - Objetos e For/In

### Usando o objeto abaixo, faça os exercícios a seguir:
    let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    };

## 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console: 
    Margarida
    Pato Donald
    Namorada do personagem principal nos quadrinhos do Pato Donald
    Sim


 */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
    }

for (let key in info){
    console.log(info[key]);
};