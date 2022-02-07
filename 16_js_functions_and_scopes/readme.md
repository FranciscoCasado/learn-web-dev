# Functions

Functions are *reusable procedures*, useful for making the code easier tounderstand.

From of the cases we have covered, consider the following example, where we have several dice rols
```js
let die1 = Math.floor(Math.random() * 20);
let die2 = Math.floor(Math.random() * 12);
let die3 = Math.floor(Math.random() * 6);
```

With functions we can write the following `rollDice()` function which can also have an argument were we pass the number of sides of a dice:
```js
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

let die1 = rollDice(20); 
let die2 = rollDice(12); 
let die3 = rollDice(6);
```

# Scopes

The *scope* of a variable refers to its *visibility* or *where in the code* can the variable be used. JS has three scopes: function, block and lexical.

## Function Scope
Variables that are defined (declared) inside a function cannot be referenced out of the function.
```js
function birdWath() {
    let bird = "Nighingale";
    console.log(bird)
}

birdWatch();        // prints 'Nighingale'
console.log(bird)   // prints undefined
```
Variables defined out of the function can be used inside a function, but also, a new variable that uses the same namespace as an outer variable can be declared inside a function:

1. Variable declared out of the function and used in the function
    ```js
    let bird = "Nighingale";
    function birdWatch() {
        bird = "Sparrow";
        console.log(bird)
    }

    console.log(bird)   // prints 'Nighingale'
    birdWatch();        // prints 'Sparrow'
    console.log(bird)   // prints 'Sparrow'
    ```
2. Variable with same name declared inside the function
    ```js
    let bird = "Nighingale";
    function birdWatch() {
        let bird = "Sparrow";
        console.log(bird)
    }

    console.log(bird)   // prints 'Nighingale'
    birdWatch();        // prints 'Sparrow'
    console.log(bird)   // prints 'Nighingale'
    ```
    
## Block Scope
A *block* is every piece of code that is inside a pair of braces `{ }`. Functions, for loops and conditionals are blocks. Every variable declared with `let` and `const` inside a block will have *block scope*. `var`declarations, however, have function scope.

## Lexical Scope
Any inner block or function has access to the variables defined in a parent or any of its succesive parents, but not the other way around.

```js
function bankRobery(){
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther'];
    function cryForHelp() {
        for  (let hero of heroes) {
            console.log(`Please help us, ${hero}!`)
        }
    }
    cryForHelp();
}
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

# `this`
The keyword `this` refers to the object itself. When called inside an object, the keyword will hold every variable and method that it has been bound to (via property-value assignements).

However, `this` value depends on the context where it is run. Lets see the following example when run in the terminal with node:
```js
const cat = {
    name: "Blueberry",
    meow () { console.log(`${this} says meow!!`)}
}

const justMeow = cat.meow;  // note that the function has not been called!

cat.meow();     // prints 'Blueberry says meow!!'
justMeow();     // prints 'undefined says meow!!'
```
However, if the same code is run in a browser, the last result is very different:
```js
justMeow();     // prints 'usi_aff=1=1646771350149; says meow!!'
```

**Why?**
Every method that calls `this` will assert the value of `this` as the object that is calling the method. But `justMeow' is not called from an object in the previous example... or is it?

Well, everything in JS is an object. Even an application, written in a plain `.js` file, has an object that serves as a container for the variables, functions and objects it creates when run.

In node, the *top level object* is the following;
```js
Welcome to Node.js v16.1.0.
Type ".help" for more information.
> this
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: [Getter/Setter],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}
```

But in Chrome, the top level object is filled with lots of parameters:
```js 
> this
Window {0: Window, 1: Window, 2: Window, 3: Window, 4: global, window: Window, self: Window, document: document, name: 'usi_aff=1=1646771350149;', location: Location, …}
```