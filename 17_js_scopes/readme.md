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