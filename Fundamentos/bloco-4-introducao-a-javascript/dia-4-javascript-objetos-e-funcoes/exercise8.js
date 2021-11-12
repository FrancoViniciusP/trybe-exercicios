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

## 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

 */
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        { titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas', 
    },
        { titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco', 
    },
    ],
};

let books = leitor.livrosFavoritos;

let booksNumber = books.length;

console.log(leitor.nome + " tem " + booksNumber + " livros favoritos");


