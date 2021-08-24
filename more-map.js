
const friends = ['Tom hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const product = [
    { name: 'Book', price: 350, color: 'yellow', page: 400 },
    { name: 'Mobile', price: 17500, color: 'silver', UI: 'Mi' },
    { name: 'Note', price: 50, color: 'yellow', page: 200 },
    { name: 'keybord', price: 1050, color: 'black', key: 70 }
];

const productNames = product.map(product => product.name);
const productPrice = product.map(product => product.price);
// product.map(product => console.log(product));


// console.log(productNames);
// console.log(productPrice);


