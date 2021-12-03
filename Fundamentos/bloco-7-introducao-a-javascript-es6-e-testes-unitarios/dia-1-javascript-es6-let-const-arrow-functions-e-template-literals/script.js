const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    //   ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(`${ifScope} ótimo, fui utilizada no escopo`);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    //  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  oddsAndEvens.sort(function(a, b){return a-b});

  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉


  /* PART 2 */

  const fatorial = (Number) => (Number === 0) ? (1) : (fatorial(Number-1)*Number);
  console.log(fatorial(3));


    //   longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
 const longestWord = (phrase) => {
    let word = "";
    let arr = phrase.split(' ');
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].length > word.length){
            word = arr[i];
        }
    }
    return word;
 }

 console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));


 let clickCount = 0;
 const count = document.getElementById('contador');
 const button = document.getElementById('button');
 button.addEventListener('click', () => {
   clickCount += 1;
   count.innerHTML = clickCount;
 });
 

 const function1 = (text) => {
   const parameter = 'Rocket';
   let newText = text.replace('x', parameter);
   return newText;
 }

 console.log(function1('Tryber x aqui'));