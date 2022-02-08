## JavaScript Beginners Fundamentals:

### What is JavaScript?

- JavaScript is a ```high level(often)``` ```just-in-time compiled``` programming language that conforms to the ```ECMAScript specifications```.

- ```high level``` --> It is a more friendlier language to write code with.

- ```just-in-time compiled``` --> The code we write is compiled during execution
rather than before execution.

- ```ECMAScript specifications``` - It is the standard that javaScript adheres to which ensures the code we write will work accross any browser.

### Variables:

- let v/s const:

    - All const decalarations must be initialized and once initialized you cannot reassign a new value.

    - 

### Data Types:

- Primitive:

    - String
    - Number
    - Boolean
    - Undefined
    - Null
    - BigInt
    - Symbol

- Non Primitive:

    - Objects

- ```undefined``` --> It represents the value that is not assigned, if a variable is declared but the value is not assigned then the value of that variable will be undefined.

    - ```javaScript
            let result;
            console.log(result); // undefined
      ```

- ```null``` --> It represents a special value that represents empty or unknown value in javaScript.

### JavaScript is dynamically typed language:

- ```javaScript
        let a = 10;
        a = 'Kapil';
        a = true;
        console.log(a); // true
  ```

### Operators:

- ```==``` v/s ```===```:

    - ```===``:

        - Compares not just the value but also the data type.
    
    - ```==``:

        - Compares only the value and not the data type.

- ```!=``` v/s ```!==```:

### Type Conversions:

- Implicit Conversion:

    - It is also known as type coercion where javaScript itself will automatically convert the type.

    - ```javaScript
            console.log(true + '3'); // true3
            console.log('4' - '2'); // 2
            console.log('Bruce' - 'Wayne'); // NaN
            console.log('5' - true); // 4
            console.log('5' - false); // 5
            console.log('5' - null); // 5
            console.log(5 + undefined); // NaN
      ```

- Explicit Conversion:

    - It is where you manually convert the type.

    - ```javaScript
            console.log(Number('55')); // 55
            console.log(Number(false)); // 0
            console.log(Number(true)); // 1
            console.log(Number('')); // 0

            console.log(parseInt('a'));  // NaN
            console.log(parseInt('45')); // 45

            console.log(parseFloat('3.14')); // 3.14

            console.log(String(500)); // 500
            console.log(String(true)); // true
            console.log(String(false)); // false
            console.log(String(undefined)); // undefined

            console.log(Boolean(100)); // true
            console.log(Boolean(-12)); // true
            console.log(Boolean(0), Boolean(null), Boolean(undefined), Boolean(''), Boolean(NaN)); // false false false false false
      ```

### Equality:

- ```==``` --> Allows type coercion

- ```===``` --> Does not allow type coercion.

- truthy and falsy values.

- ```javaScript

        let var1 = 10;
        let var2 = '10';

        console.log(var1 == var2); // true
        console.log(var1 === var2); // false

        var1 = 0;
        var2 = '';

        console.log(var1 == var2); // true
        console.log(var1 === var2); // false
  ```

### Scope:

- Scope basically determines the accessibility or visibility of variables.

- Block Scope:

    - Block scope was introduced in 2015 with the introduction of let and const keywords.

    - Basically block scope dictates that variables declared insided a pair curly braces cannot be accessed from outside the block.

- Function Scope:

    - It dictates that variables declared inside the function are not accessible from outside the function.

- Global Scope:

    - Also availalbe both inside the block and inside the function.

    - It will not overwrite block or function scoped variables.