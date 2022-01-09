const soma = ((...numbers) => {
  return numbers.reduce((sum, number) => sum + number);
})

console.log(soma(1, 2, 3, 10, 10));