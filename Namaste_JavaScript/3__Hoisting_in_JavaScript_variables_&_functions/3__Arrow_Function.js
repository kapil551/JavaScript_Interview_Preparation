
console.log(getName); // we are trying to print the arrow function itself, even before intitializing it.
console.log(getName2); // // we are trying to print the function itself, even before intitializing it.

getName(); // we are trying to access getName() arrow function, even before initializing it

/*

    Uncaught TypeError: getName is not a function at 3__Arrow_Function.js:2:1

    This happens because when we use arrow functions, then initially the arrow functions behave just like another variable.

    Now this getName does not behave like a function, but it behaves like a variable.

    So, just like it allocates "undefined" to the variables in the memory creation phase, getName is also allocated "undefined" in the memory creation phase.
*/

getName2();

console.log(x); // we trying to acces variable x, even before assigning it some value

var x = 7;

// normal function
function getName2() {
    console.log("Hello from getName2");
}

// arrow function
var getName = () => {
    console.log("Hello JavaScript");
}

/*

    - In most of the programming languages, this will result in an error,
    but JavaScript is very different in this case
*/

console.log(getName); // it will print the arrow function itself
