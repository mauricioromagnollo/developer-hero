
const numbers = [1, 2, 3, 4, 5];

// Utilizando o length;

console.time('tempo-for-01')
for (i = 0; i < numbers.length; i++) { console.log(numbers[i]); }
console.timeEnd('tempo-for-01')

// Extraindo o length;

console.time('tempo-for-02')
const len = numbers.length;
for (i = 0; i < len; i++) { console.log(numbers[i]); }
console.timeEnd('tempo-for-02')

// Utilizando o map;
console.time('tempo-map')
numbers.map(number => console.log(number))
console.timeEnd('tempo-map')