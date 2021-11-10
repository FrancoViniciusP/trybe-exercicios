/* ## 3- Agora inverta o lado do triângulo. Por exemplo:

n = 5

    *
   **
  ***
 ****
*****
Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
 */

let n = 8;
let matriz =  '';
let inicial = n - 1;


for(j = 0; j < n; j += 1){
    for (i = 0; i < n; i += 1){
        if (i < inicial){
            matriz += " ";
        } else{
            matriz += "*";
        }
    }

  console.log(matriz);
  matriz = '';   
  inicial -= 1; 
}

