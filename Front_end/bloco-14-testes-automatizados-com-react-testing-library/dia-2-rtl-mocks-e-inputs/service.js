
function randomNumber() {
   return  (Math.random()*100).toFixed(0);
}

function turnToUpper(word) {
    return (word.toUpperCase());
}

function theLastLetter(word) {
    return (word[0]);
}

function joinWords(a, b) {
    return (`${a} ${b}`)
}

console.log(turnToUpper('vinicius'))

console.log(theLastLetter('vinicius'))

console.log(joinWords('olá', 'vinicius'))


module.exports = { randomNumber, turnToUpper, theLastLetter, joinWords };