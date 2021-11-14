/* 

## 12 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
    Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
    Valor esperado no retorno da função: Fernanda .


 */

function biggerName() {
    let n = 0;
    let theName = '';
    for (let i = 0; i < names.length; i += 1){
        if (names[i].length > n){
            n = names[i].length;
            theName = names[i];
        };
    }; 
    return theName;    
};

names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(biggerName(names));