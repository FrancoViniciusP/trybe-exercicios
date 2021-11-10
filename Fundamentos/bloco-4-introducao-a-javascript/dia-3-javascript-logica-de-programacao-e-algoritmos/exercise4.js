/* ## 4- Depois, faça uma pirâmide com n asteriscos de base:

n = 5

  *
 ***
***** */

let n = 5;
let matriz = '';
let meio = (n-1)/2;
let inc = meio;
let dec = meio;

for (i = 0; i <= meio; i += 1) {
    for (j = 0; j < n; j+= 1) {
        if (j >= inc && j <= dec) {
            matriz += "*";
        } else{
            matriz += " ";
        }
    }
    console.log(matriz);
    matriz = '';
    dec += 1;
    inc -= 1;
}
