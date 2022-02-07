# JS Arrays
Arrays allow us to *group* data together in a ordered manner. In other words, they are an ordered collection of information.

Array syntax in JS is the following:
```js
let emptyArray = [];
let numbers = [6, 23, 37, 48, 55];
let colors = ["yellow", "orange", "green"];
let stuff = ["spoon", true, 42, null, 8.8234, undefined];
```
One important note is that arrays are of type `object`, which means there is not possible to tell if a variable is a string by simply testing the `typeof`:
```js
typeof([]);     // 'object'
```

## Array indices
Every element of the array can be referenced by using indices:
```js
let dwarves = ["Thorin II", "Fíli", "Kíli", "Óin"];
dwarves[2];     // 'Kíli'
console.log(dwarves);        // ['Thorin II', 'Fíli', 'Kíli', 'Óin']
```

## Reassigning array element values
Even when an array may be declared as constant, we can update the content of an element by reassigning it using the index reference:
```js
const dwarves = ["Thorin II", "Fíli", "Kíli", "Óin"];
dwarves[1] = "Bombur";
console.log(dwarves);        // ['Thorin II', 'Bombur', 'Kíli', 'Óin']
```

## Array methods

Arrays have methods that allow modification and calculations based on its contents. Some of the most common are:

- `push(element)`: appends `element` to the end of the array and returns the length of the resulting array
- `pop()`: returns the last element in the array and removes it
- `shift()`: returns the first element in the array and removes it
- `unshift(element)`: appends `element` to the beginning of the array and returns the length of the resulting array

```js
let movieLine = ["tom", "nancy"];
movieLine.push("oliver");   // returns 3
movieLine.pop();            // returns 'oliver'
```
We can also pass several elements to `push` and `unshift` to add the items in one instruction:
```js
let movieLine = [];
movieLine.push("ben", "karl", "marie", "joane");    // returns 4
movieLine.unshift("frank", "kat");                         // returns 6
```

**IMPORTANT**: unlike strings, this methods modify the array. Remember that most string methods return a modified copy of the original string.

These methods allow us to implement data-structures that mimic the behaviour of Queues and Stacks.

### Array Concatenation

Arrays can be concatenated, wich means, we can put the contents of two arrays into a new one, preserving the order:

```js
let cats = ["blue", "kitty"];
let dogs = ["rusty", "wyatt"];
cats.concat(dogs);      // ['blue', 'kitty', 'rusty', 'wyatt']
```
Note that cats is not modified

### Find an element in the array
```js
let comboParty = cats.concat(dogs)
comboParty.includes("blue");    // true
comboParty.indexOf("blue");     // 0
```

### Slice and Splice
These work similarly to the slice and splice methods that strings have. These methods are descructive, which means that they modify the original object.

## Equalities

Testing equality for arrays can be counter-intuitive, because JS does not test what is stored in the array, but the *reference* (address):
```js
[1, 2, 3] === [1, 2, 3];    // false
[1, 2, 3] == [1, 2, 3];     // false
```

```js
let nums = [1, 2, 3];
let numsCopy = nums;
numsCopy.push(4);       
console.log(nums);      // [1, 2, 3 , 4]
```

## Important note on `const` and arrays
Given that arrays are the *reference* to a collection, the `const` keyword is often used to keep the reference safe, while the content can be changed whenever we want:

```js
const cats = ["kitty", "pearl", "fluff"];
cats.push("tim");           // ok, no error
cats = ["alex", "ditzy"]    // throws an error!
```

## Arrays of arrays
Classics of arrays: arrays can contain arrays.

## Destructuring arrays

```js
const animals = ['cat', 'dog', 'penguin', 'turtle', 'rat', 'bird'];
const [cat, dog, ...everyAnimalElse] = animals;

console.log(cat);               // prints 'cat'
console.log(everyAnimalElse));  // prints ['penguin', 'turtle', 'rat', 'bird']
```