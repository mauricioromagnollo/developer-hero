const array = new Array();

console.log(array);

const numbers = [1, 2, 3, 4, 5, 6];

/**
 * Pegar o último item de um Array
 */
let lastItem = null;

lastItem = numbers.at(-1);
console.log(lastItem);
// 6

lastItem = numbers[numbers.length - 1];
console.log(lastItem);
// 6