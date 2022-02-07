# Array Callbacks

Arrays have powerfull functions that iterate throw the array and recieve another function as an argument, called *callback*. The callback will be executed with every element of the array as an argument.

## `forEach` method
```js
const numbers = [1, 2, 3, 4, 5];
function print(thing){
    console.log(thing);
}

numbers.forEach(print);     // prints every element of numbers in a single line
```

Moreover, we can use anonymous functions if it is a function that we won't call again

```js
const numbers = [1, 2, 3, 4, 5];
numbers.forEach( e => console.log(e) );
```

## `map` method
The `map` method allows the *reproduction* of an array, but with an added process that is computed for each element:

```js
const movies = [
    {
        title: "Kill Bill vol. 1",
        score: 95
    },
    {
        title: "Bug's Life",
        score: 89
    },
    {
        title: 'Avengers Endgame',
        score: 91
    },
]
const titles = movies.map(movie => movie.title);
console.log(titles);    // returns [ 'Kill Bill vol. 1', "Bug's Life", 'Avengers Endgame' ]
```

## `filter` method
One useful method for filtering data is the `filter` method, that only accepts callbacks that return boolean values:

```js
const goodMovies= movies.filter(m => m.score >90);
console.log(goodMovies);        // returns [ { title: 'Kill Bill vol. 1', score: 95 }, { title: 'Avengers Endgame', score: 91 } ]
```

## Test elements with `every` and `some` methods

These methods allow to check if *every* or *some* elements complies with a certain condition, passed as callback:

```js
movies.every( m => m.score > 90);   // returns false
movies.some( m => m.score > 90);   // returns true
```
## `reduce` method
Executes a reducer function on each element of an array and returns only one value, for example, when we sum all the elements:
```js
const numbers = [1, 2, 3, 4, 5];
numbers.reduce( (accumulator, currentValue) => {
    return accumulator + currentValue;
});
```
or the average:
```js
numbers.reduce( (accumulator, currentValue) => {
    return accumulator + currentValue / this.length;
});
```
