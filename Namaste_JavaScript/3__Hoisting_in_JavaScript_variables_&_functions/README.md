# Hoisting in JavaScript 🔥(variables & functions)

1. Introduction to "Hoisting" in JavaScript:

2. Variable and Function Hoisting in JS:

    - Hoisting is a phenomenon in javaScript by which we can access the variables and functions even before we have initialized it or assigned some value, without any error.

3. Diving Deep under the hood of the JavaScript code:

    - We have seen that, whenever we run a javaScript code an execution context is created.

    - And this execution context is created in two phases, where first is the memory creation phase.

    - This whole concept of "HOISTING IN JS" lies under this memory creation phase.

    - I.E., Even before the js code starts executing, memory is allocated to the variables and functions.

    - variables are assigned "undefined" and the functions are assigned the "whole function itself" i.e. "actual copy of the function".

4. "Not Defined" V/S "undefined":

5. Behaviour with Arrow Function:

    - Initially the arrow function behaves a another variable.

    - In the memory creation phase, the arrow function is allocated memory and assigned a value "undefined".

6. Demo of Call Stack in the Browser:

    - Watch the video again to see the "call stack" in action.