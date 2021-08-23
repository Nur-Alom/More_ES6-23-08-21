
// 1. let and const.
const hubby = 'omor sani';
let phone = 'Mi';
phone = 'samsung';

// 2. default parameter.
// 5. spread or three dots(...).
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}

const biggest = maxNumber();
console.log(biggest);

// 3. template String.
const myNotes = `I am mojnu of ${hubby}. I dont have a laili`;
console.log(myNotes);

// 4. arrow function.
const square = x => x * x;
console.log(square(9));