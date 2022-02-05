
# JS Primitive types
The most primitive types in JS are:
- Numbers: represent every type of number (except complex)
- Strings represent *arrays* of characters and letters
- Booleans represent True or False logic values
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

## Assign variables
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

### `const`
`const` variables cannot be reassigned, so an error is thrown when some instruction in the code tries to do it.
```js
const luckyNum
```
### `var`
`var` assignement works very similarly to `let`, however, it has `function` scope, instead of `block` scope. `var` variables can be re-declared (!), so in bigger bigger applications may produce several bugs caused by repeated variable names or by multiple references to variables with the same name.

Also, `let` is not intended for global scopes, so even if a code may run while havin a `let` assignement in the global scope, many linters will complain about it. 

Better explanation here: https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var


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

## Strings

Numbers and booleans are ok, but what if I want to store names, words or phrases? JS has *strings* for that :)

```js
let favAnimal = 'Dumbo Octopus';
let age = "23";
```

Note taht the last assignment is not assigning the *number* `23` but the characters `2` and `3` in the `age` identifier.

One should never mix single and double quotes in string declaration, unless there is one of the two characters that is needed in the sentence, e.g.:
```js
let greetings = "Hell! I'm John"
```
Here the double quotes `"` are state the variable start and end, and the single quote is just another character.

## Strings have indices
In JS, strings are indexed, which meand that every character can be addressed by a number of a list:
```js
let animal = "Dumbo Octopus";
animal[0];  // "D"
animal[1];  // "u"
animal[6];  // "O"
animal[99]; // undefined
```
When do we use string indices? One use case is checking the phone area code of a telephone number string:
```js
let phone = "(234) 457-9820"
phone[0];   // "("
```

Strings also have *length*   that can be accessed via the `length` property:
```js
let animal = Phoenix;
animal.length;  // 7
"dog".length;   // 3
```

Also, we can concatenate two or more strings with the `+` operator:
```js
let animal = Phoenix;
let place = River;
let combine = place + animal;     // RiverPhoenix
```
The result will always be a new variable; changing the conten of `animal` or `place` will not affect the content of `combine`.

Furthermore, when numbers are added to strings, they are interpreted as strings, so the result is the concatenation of both:
```js
1 + "hello";        // "1hello"
typeof(1);          // "number"
typeof(1+"hello");  // "string"
```
**¡¡BE CAREFUL WHEN SUMMING NUMBERS TO STRINGS AND EXPECTING NUMBERS!!**


## String methods

Methods are actions of a string (or object) that perform some calculations and return an output:
```js
let msg = "leave me alone";
msg.toUpperCase();  //'LEAVE ME ALONE'

let userInput = "     hello, my name is tim tom     ";
userInput.trim();   // 'hello, my name is tim tom'

let greeting = " hello again!!       ";
greeting.trim().toUpperCase(); " // 'HELLO AGAIN!!'
```
Many string methods return a modified copy of the original string, so they are called "non-destructive" methods.


There are also methods that accept *arguments*, which is stuff we pass through the parenthesis:
```js
let tvShow = 'catdog';

tvShow.indexOf('cat');  // 0
tvShow.indexOf('dog');  // 3
tvShow.indexOf('$');    // -1 (does not contain '$')
```

Some other funny methods can be found at MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

## Template literals
One way to easily format text that depends on variable values is template strings:
```js
let product = 'Artichoke';
let price = 3.99;
let qty = 5;
const msg = `You bought ${qty} ${product}. Total price is: ${qty*price}`;
```

**VERY HANDY!**

## Null vs Undefined

`undefined` happens when the JS interpreter cannot find the value for the variable that is evaluating because it has not been assigned or its reference is unknown.

`null` represents a value that is not a value, but it is assigned that.

## Math
`Math.random`
`Math.floor`

