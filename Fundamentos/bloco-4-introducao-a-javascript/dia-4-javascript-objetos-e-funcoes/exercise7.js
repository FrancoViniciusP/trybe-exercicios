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

## 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações: 
{
titulo: 'Harry Potter e o Prisioneiro de Azkaban',
autor: 'JK Rowling',
editor: 'Rocco',
}

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

let books = leitor.livrosFavoritos;

books.push ({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
});

console.log(books);