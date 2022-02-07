# Functions

Functions are *reusable procedures*, useful for making the code easier tounderstand.

From of the cases we have covered, consider the following example, where we have several dice rols
```js
let die1 = Math.floor(Math.random() * 20);
let die2 = Math.floor(Math.random() * 12);
let die3 = Math.floor(Math.random() * 6);
```

## Function declaration
With functions we can write the following `rollDice()` function which can also have an argument were we pass the number of sides of a dice:
```js
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

let die1 = rollDice(20); 
let die2 = rollDice(12); 
let die3 = rollDice(6);
```
## Functions as variables
There are many different ways of defining functions, apart from the one we defined previously, but one of the most common is assigning it to a variable:
```js
const add = function (x, y) {
    return x +y;
}
```
In this case, we do not assign a name to the function, but we assign it to the variable `add`. In order to call the function, we can just call `add(i,j)` and it will execute the function.

This can happen in JS because even functions are treated as variables and one of the most powerful features of the language is that a function can return functions and be passes around like they are anything else. For example:

## Arrow functions
Arrow functions are a compact way of defining functions, but without naming them. How is it possible? An arrow function only needs a list of arguments and the result it produces, both linked by an arrow `=>`. For example

```js
const succesor = (num) => {return num + 1};
console.log(succesor(4));       // prints 5
```

There are some cases when arrow functions can be written in a more compact way:
- When arrow functions recieve only one argument, the parenthesis can be omitted:
    ```js
    const succesor = num => {return num + 1};
    ````
- When we want the result inmediately *and* there is only one expression to be evaluated in the function, we can use the *implicit return* notation, where the braces and the `return` keyword are omitted;
    ```js
    const succesor = num => num + 1 ;
    ```
    If we need to return an object, it must be wrapped in parenthesis:
    ```js
    const object = params => ({param: "a"}) ;
    ```
    
**Important note**
Furthermore, a function can be defined with this syntax and without assigning it to a variable. This kind of functions are called *anonymous functions*, which are very useful when dealing with multiple procedures that share logic, but depend on specific parameter values. More on this topic in the following sections.



# Higher-order functions
Every function that recieves one or more function as an argument or returns one or more functions are result is called as a *higher-order* function.

## Function as argument
```js
function callTwice (func) {
    func();
    func();
}

function rollDice () {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDice);    // prints two times
```
## Return a function
There are several applications where we may want to return functions depending on parameters. The following code example is based on a code pattern called *factory* and is widely for several purposes:
```js
function makeBetweenFunc (min, max) {
    return function (num) {
        return (num >= min && num <= max);
    }
}

const isChild = makeBetweenFunc(0, 17);
const isAdult = makeBetweenFunc(18, 64);
const isSenior = makeBetweenFunc(65, 100);

console.log(isChild(5));    // true
console.log(isAdult(17));   // false
console.log(isSenior(95));  // true
```

## Add methods to objects
Combining the information above, we can see that object literals can have functions as property values, which then behave as methods:
```js
const myMath = {
    PI: 3.1415,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num * num * num;
    }
}
console.log(myMath.PI);         // prints 3.1415
console.log(myMath.square(2))   // prints 4
console.log(myMath.cube(4))     // prints 64
```

Recently, there is a shorthand for omitting the `function` keyword:
```js
const myMath = {
    add (x, y) {
        return x + y;
    },
    multiply (x, y) {
        return x * y;
    }
}
```

## Accessing arguments of a function
This applies to every function except arrow ones. Every function comes with an array-like variable that can be accessed through the `arguments` keyword *inside* the function. It is an *array-like* because it behaves as an array in the way it stores the data and how we can access each element, but it has not the buil-in methods that every other iterable has.

In order to deal with this "issue", we can use the *rest params* syntax:

```js
function sum (start_number, ...rest) {
   console.log(start_number, rest); 
}
```
This syntax means that all the parameters we enter after the mandatory ones, will be stored in the array `rest` (we can choose any other name; the three dots are the ones that matter).

## Destructuring arguments

```js
const student = {
    firstName: 'David',
    lastName: 'Jones'
};

function fullName({firstName, lastName}){
    return `${firstName} ${lastName}`
}

console.log(fullName(student));     // prints 'David Jones'
```

This is possible because in the declaration we state that the function expects an object, so using the destructuring feature of the objects we can use the keys that we know and use them directly in the function body.