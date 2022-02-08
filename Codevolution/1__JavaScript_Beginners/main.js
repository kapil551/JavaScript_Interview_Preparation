console.log("Hello from main.js");

// console.log(true + '3'); // true3
// console.log('4' - '2'); // 2
// console.log('Bruce' - 'Wayne'); // NaN
// console.log('5' - true); // 4
// console.log('5' - false); // 5
// console.log('5' - null); // 5
// console.log(5 + undefined); // NaN

// console.log(Number('55')); // 55
// console.log(Number(false)); // 0
// console.log(Number(true)); // 1
// console.log(Number('')); // 0

// console.log(parseInt('a'));  // NaN
// console.log(parseInt('45')); // 45

// console.log(parseFloat('3.14')); // 3.14

// console.log(String(500)); // 500
// console.log(String(true)); // true
// console.log(String(false)); // false
// console.log(String(undefined)); // undefined

// console.log(Boolean(100)); // true
// console.log(Boolean(-12)); // true
// console.log(Boolean(0), Boolean(null), Boolean(undefined), Boolean(''), Boolean(NaN)); // false false false false false


let var1 = 10;
let var2 = '10';

console.log(var1 == var2); // true
console.log(var1 === var2); // false

var1 = 0;
var2 = '';

console.log(var1 == var2); // true
console.log(var1 === var2); // false