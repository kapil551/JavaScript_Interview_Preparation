
getName(); // we are trying to access getName() function, even before initializing it

console.log(x); // we trying to acces variable x, even before assigning it some value

console.log(getName); // we are trying to print the function itself, even before intitializing it.


var x = 7;

function getName() {
    console.log("Hello JavaScript");
}

/*

    - In most of the programming languages, this will result in an error,
    but JavaScript is very different in this case
*/

console.log(getName); // it will print the function itself
