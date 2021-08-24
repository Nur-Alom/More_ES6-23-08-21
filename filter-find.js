
const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumber = numbers.filter(number => number > 20);
const smallNumber = numbers.filter(number => number < 10);

const product = [
    { name: 'Book', price: 350, color: 'yellow', page: 400 },
    { name: 'Mobile', price: 17500, color: 'silver', UI: 'Mi' },
    { name: 'Note', price: 50, color: 'yellow', page: 200 },
    { name: 'keybord', price: 1050, color: 'black', key: 70 }
];
const expensive = product.filter(product => product.price >= 1050);
const blacks = product.filter(product => product.color == 'red');

// console.log(blacks);
// console.log(expensive);

// console.log(bigNumber);
// console.log(smallNumber);


const whiteItem = product.find(product => product.color == 'yellow');
console.log(whiteItem);


