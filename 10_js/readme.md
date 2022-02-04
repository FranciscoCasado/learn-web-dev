# The wonderful world of JavaScript
JS can be run headless in a server or control the logic of html pages in many modern browsers. From interactive menus and galleries, to chatboxes inside a shop web page, JS can manage whatever happens inside a page and we can define the logic of how it happens :)

## The console
In any web browser, you can open a console in the developer tools. One of the powerful features in the dev tools consoles is that they work in a *Read Evaluate Print Loop* (REPL), which means that every statement we input into the console will be evaluated and the resul will be printed back at us.

However, we can run JS files from a terminal with `node`.
```sh
$ node hello_world.js
Hello World!
```


# Primitive types
The basic types are:
- Number: for working with every type of number
- String: for working with charracters and letters
- Boolean: True or False logic values
- Null
- Undefined
- Symbol (uncommon)
- BigInt (uncommon)

## Numbers & Math
In many languages there are several number types. In JS, we just have `Number`. Any floating point must be written with its decimal point and places.

Alongside with Numbers, we have *math operations*. Basic operations are:
- Addition: sum of two numbers
- Substraction: substraction of two numbers 
- Multiplication: product of two numbers
- Division: division of two numbers
- Modulo: remainder of  a division `9 % 2 = 1`
- Exponentiation: power of a number '9 ** 2 = 81` 

The order of a statement with more than 2 terms is computed following this order, and then from left to right:
1. Parenthesis
2. Exponentials (powers)
3. Multiplications
4. Addition
5. Substraction

### Not a Number
There is a value in JS that represent a numeric value that is not a number. It is used mainly in divisions by zero:
```js
> typeof(NaN)
< "number"
```
Any operation that takes a `NaN` outputs a `NaN`, so no real math can be done with it, however, it helps us handling some results and catch errors.

## Variables
*Variables* are names we use to reference some data we want to use further in our program.

Any variable can be assigned with this simple syntax:
```js
let variableName = value;
```

Then, every time we call the `variableName`, the result will be the `value` we stored, unless we update its value by reassigning it.

When updating variables, we don't need the `let` keyword again:
```js
let score = 0;
score = socre + 5;  // 5
score += 5;         // 10
score /= 2;         // 5
score++;            // 6
```


There are 2 other keywords that are used while assigning variables: `const` and `var`.

`const` variables cannot be reassigned, so an error is thrown when some instruction in the code tries to do it.
```js
const luckyNum
```

`var` variables can be reassigned, but nowadays, the keyword is being replaced with `let`, so it is not very common in recent code. It works very similarly to `let`, however, it has global scope, so in bigger bigger applications may produce several bugs caused by repeated variable names.

## Booleans
Booleans are values that can be used to evaluate logic propositions: `true` and `false`.
```js
let isActive = true;
let isInactive = false; 
```

## Dynamic types

JS is dynamically typed, wich means there are no actual types, but we can build objects on top of the primitive types *and* the type of an object can change through the program:
```js
let superVariable = 15;
superVariable = true;
```

This code will not throw errors :)

## Naming Conventions

In JS there are *hard rules* that we must abide when coding JS:
- Identifiers (variable names) cannot have spaces
- Identifiers can have `_`,`$` and digits
- Identifiers cannot start with a digit

There are also some conventions in the community:
- Use camel-casing for identifiers: `goodNamesAreCamelCased`
- Use self-explanatory names instead 
```js
bad name:  userLoggedIn = false;
good name: isUserLoggedIn = true;
```