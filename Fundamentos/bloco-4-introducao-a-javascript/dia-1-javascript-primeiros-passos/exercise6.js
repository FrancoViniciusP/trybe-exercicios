/* 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

* Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

* Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

* Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

* Exemplo: bishop -> diagonals */

let piece = "kIng";
piece = piece.toLowerCase();

switch (piece){
    case "king":
        console.log("One square to any side");
        break;
    case "queen":
        console.log("Any square to any side");
        break;
    case "rook":
        console.log("Any square horizontally or vertically");
        break;
    case "bishop":
        console.log("Any number of squares diagonally");
        break;
    case "knight":
        console.log("In a L shape, they're able to jump other pieces");
        break;
    case "pawn":
        console.log("One square forward but only capture one square diagonally in a forward direction")
        break;
    default:
        console.log("That's not a Chess Piece");
}
