// function statements

// function 2 parts
// 1st function define
// 2nd function invocation, function calling

function sayHello(param) {
    console.log("Hello", param);
}

sayHello();
console.log("-------------------------");
sayHello("Tommy");
console.log("-------------------------");
sayHello(10);
console.log("-------------------------");
sayHello(true);
console.log("-------------------------");
sayHello([1,2,3,4,"Harry"]);
console.log("-------------------------");
sayHello({ name : "Rajiv", age: 32, gender: "Male"});


// Scenario 2
function sayHello2() {
    console.log("Hello");
}

sayHello2();
console.log("-------------------------");
sayHello2("Tommy");
console.log("-------------------------");
sayHello2(10);
console.log("-------------------------");
sayHello2(true);
console.log("-------------------------");
sayHello2([1,2,3,4,"Harry"]);
console.log("-------------------------");
sayHello2({ name : "Rajiv", age: 32, gender: "Male"});

// first class citizens
// functions can be treated as variables


