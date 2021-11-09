let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let lower = 10000000000;

for (let compare of numbers) {
    if (compare < lower) {
        lower = compare;
    } 
}

console.log(lower);