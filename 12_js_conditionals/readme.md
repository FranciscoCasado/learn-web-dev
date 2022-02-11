# 12. JS Comparisons

As in many languages, JS has comparisons between numbers and other types. The most basic is comparing numbers, which always return a `boolean`, but characters can also be compared using the unicode mapping:
```js
1 > 3;      // false
5 < 9;      // true
'A' < 'a';  // true
```

## Equality & Inequality operators

- `<`: less than 
- `<=`: less or equal than
- `>`: greater than
- `>=`: greater or equal than

- `==` : equiality that coherces value type, i.e.: convert to the same type and then compare
- `!=` : negate  equality
```js
1 == '1';   // true
0 == false; // true
```
- `===` : *strict* equality that compares value *and* type
- `!==` : negate strict equality
```js
1 === '1';   // false
0 === false; // false
```

**Important**: It is recommended to always use *strict* equals.


## Testing propositions: `if` & `else`
`if` statements work as in many languanges:
```js
if (condition){
    /* Do something */
} else {
    /* Do some other thing */
}
```

They can also be nested 
```js
const password = prompt("please enter new password");

if (password.length >= 6){
    if (password.indexOf(' ') === -1){
        console.log ("Valid password");
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("Password too short!! Must be 6+ characters")
}
```

## Truthy and Falsy values
We know that there is only one value that is *true* and one that is *false*. But in JS, every value has a "truth" value, and can evaluated evaluated to `true` or `false`, depending on the following rules:

1. These values are evaluated as `false` (falsy values):
    - 0
    - "" (empty string)
    - null
    - undefined
    - NaN
2. Every other value is evaluated as `true` (truthy).


## Logic operators

- AND:  `&&`
- OR:   `||`
- NOT:  `!`

The previous nested example can be re-arranged as:

```js
const password = prompt("please enter new password");

if (password.length >= 6 && password.indexOf(' ') === -1){
    console.log ("Valid password");
} else {
    console.log("Incorrect format for password!")
}
```

And the museum example can be re-written as:
```js
const age = prompt("How old are you?");

if (age < 5) {
    console.log("Free");
} else if (age < 10 || age >= 65) {
    console.log("Child / Senior: $5");
} else {
    console.log("General: $10");
}
```

## Switches

Switch statements allow us to control the flow when several cases are presented for a given value:

```js
const day = 2;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    /* ... */
    case 6:
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("I do not know that day :c");
        break;
}
```

