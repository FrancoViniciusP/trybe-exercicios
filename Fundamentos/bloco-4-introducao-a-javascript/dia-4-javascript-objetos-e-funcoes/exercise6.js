/* 
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

## 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
 */

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

leitor["fullname"] = leitor.nome + " " + leitor.sobrenome;

let book0 = leitor.livrosFavoritos[0];

//console.log (book0["titulo"]);

console.log("O livro favorito de " + leitor.fullname + " se chama " + "'" + book0["titulo"] + "'");