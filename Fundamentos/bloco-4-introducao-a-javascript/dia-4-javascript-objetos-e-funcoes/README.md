# EXERCÍCIOS

## Parte I - Objetos e For/In

### Usando o objeto abaixo, faça os exercícios a seguir:
    let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    };

## 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: _[Exercicío 1](https://github.com/FrancoViniciusP/trybe-exercicios/blob/main/Fundamentos/bloco-4-introducao-a-javascript/dia-4-javascript-objetos-e-funcoes/exercise1.js)_

Bem-vinda, Margarida

## 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console: _[Exercicío 2](https://github.com/FrancoViniciusP/trybe-exercicios/blob/main/Fundamentos/bloco-4-introducao-a-javascript/dia-4-javascript-objetos-e-funcoes/exercise2.js)_

    {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
    }

## 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console: _[Exercicío 3](https://github.com/FrancoViniciusP/trybe-exercicios/blob/main/Fundamentos/bloco-4-introducao-a-javascript/dia-4-javascript-objetos-e-funcoes/exercise3.js)_

    personagem
    origem
    nota
    recorrente

## 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console: _[Exercicío 4](https://github.com/FrancoViniciusP/trybe-exercicios/blob/main/Fundamentos/bloco-4-introducao-a-javascript/dia-4-javascript-objetos-e-funcoes/exercise4.js)_

    Margarida
    Pato Donald
    Namorada do personagem principal nos quadrinhos do Pato Donald
    Sim

## 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console: _[Exercicío 5](https://github.com/FrancoViniciusP/trybe-exercicios/blob/main/Fundamentos/bloco-4-introducao-a-javascript/dia-4-javascript-objetos-e-funcoes/exercise5.js)_

    Margarida e Tio Patinhas
    Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
    Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
    Ambos recorrentes // Atenção para essa última linha!


### Usando o objeto abaixo, faça os exercícios a seguir:

    let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
        },
    ],
    };

## 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'". _[Exercicío 6](https://github.com/FrancoViniciusP/trybe-exercicios/blob/main/Fundamentos/bloco-4-introducao-a-javascript/dia-4-javascript-objetos-e-funcoes/exercise6.js)_

## 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações: _[Exercicío 7](https://github.com/FrancoViniciusP/trybe-exercicios/blob/main/Fundamentos/bloco-4-introducao-a-javascript/dia-4-javascript-objetos-e-funcoes/exercise7.js)_

    {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
    }

## 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos". _[Exercicío 8](https://github.com/FrancoViniciusP/trybe-exercicios/blob/main/Fundamentos/bloco-4-introducao-a-javascript/dia-4-javascript-objetos-e-funcoes/exercise8.js)_


## Parte II - Funções

## 9 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
    Exemplo de palíndromo: arara .
    verificaPalindrome('arara') ;
    Retorno esperado: true
    verificaPalindrome('desenvolvimento') ;
    Retorno esperado: false

## 10 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
    Array de teste: [2, 3, 6, 7, 10, 1]; .
    Valor esperado no retorno da função: 4 .

## 11 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
    Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
    Valor esperado no retorno da função: 6 .

## 12 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
    Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
    Valor esperado no retorno da função: Fernanda .

## 13 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
    Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
    Valor esperado no retorno da função: 2 .

## 14 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
    Valor de teste: N = 5 .
    Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

## 15 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
    Valor de teste: 'trybe' e 'be'
    Valor esperado no retorno da função: true
    verificaFimPalavra('trybe', 'be') ;
    Retorno esperado: true
    verificaFimPalavra('joaofernando', 'fernan') ;
    Retorno esperado: false
