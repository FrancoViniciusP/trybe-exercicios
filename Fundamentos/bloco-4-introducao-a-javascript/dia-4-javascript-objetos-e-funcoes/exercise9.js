/* ## Parte II - Funções

## 9 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
    Exemplo de palíndromo: arara .
    verificaPalindrome('arara') ;
    Retorno esperado: true
    verificaPalindrome('desenvolvimento') ;
    Retorno esperado: false
 */

function verificaPalindrome(word){
    let myArray = word.split("");    
    let reverse = myArray.reverse();
    myArray = word.split("");
    reverse = reverse.join();
    myArray = myArray.join();
    if (reverse == myArray){
        return true;
    } else{ 
        return false;
    };         
};

console.log(verificaPalindrome('desenvolvimento'))