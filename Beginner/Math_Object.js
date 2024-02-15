// Math is a JS object which stores numerous no. of methods related to mathematical operations like square, log etc.
console.log(Math);

let x = 81;

x = Math.floor(8.9);
x = Math.min(2, 3, 4);
x = Math.max(2, 3, 4);
x = Math.abs(-45);

// Math.random() gives a random number between 0-1.
x = Math.random();

// To find a random number between 0 to x;
x = 3;
let randomVal = Math.floor(Math.random() * (x + 1));

console.log(randomVal);
