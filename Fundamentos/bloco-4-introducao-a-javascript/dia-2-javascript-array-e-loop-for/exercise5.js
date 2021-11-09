let numbers = [5, 9, 3, 19, 70, 8, 100, 22, 35, 27];


// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let higher = 0;

for (let compare of numbers) {
    if (compare > higher) {
        higher = compare;
    } 
}

console.log(higher);