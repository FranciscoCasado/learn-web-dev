# 15. JS Loops and Iterations

Whenever a process must be repeated several times is always better to use *lopps*. JS has many ways of looping, but the most common are:
- `for`
- `while`
- `for..in`
- `for..Of`

## `for` loops

Every `for` loop has three parameters that are relevant:
- counter variable assignement
- break conition
- increment counter

```js
for (let i = 1; i <= 10; i++){
    console.log(i);
}
```

```js
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(i, j);
    }
}
```
```js
const animals = ['lion', 'tiger', 'bear'];
for (let i = 0; i < animals.length; i++){
    console.log(i, animals[i]);
}
```
```js
const animals = ['lion', 'tiger', 'bear'];
for (let i = animals.length - 1 ; i >=0 ; i--){
    console.log(i, animals[i]);
}
```

**Be careful with infinite loops!**
In this case, `i` will never reach the break condition
```js
for (let i = 1; i <= 10; i--){
    console.log(i);
}
```

## `while`
`while` loops only need one parameter: the break condition.
```js
let playerScore = 0;
let gameOver = false;
while (!gameOver){
    playerScore += Math.floor((Math.random() * 10));
    if (playerScore >= 10){
        gameOver = true;
    }
}
```

## Iterate through arrays with `for of`
Far more readable <3
```js
const topics = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer'];
for (let topic of topics){
    console.log(topic)
}
```

This can also use to iterate over *any* `iterables`, like strings. However, object literals are not iterables. For iterating through object literals the proper looping tool is `for in`

## Iterate through object literals with `for in`

```js
const testScores = {john: 23, damon: 54, karl: 29, vonnie: 37};
for (let student in testScores){
    console.log(`${student}: ${testScores[student]}`);
}
```

There is also an option of getting object literal keys as an array and values as an array:
```js
const testScores = {john: 23, damon: 54, karl: 29, vonnie: 37};
Object.keys(testScores);    // [ 'john', 'damon', 'karl', 'vonnie' ]
Object.values(testScores);  // [ 23, 54, 29, 37 ]
Object.entries(testScores); // [ [ 'john', 23 ], [ 'damon', 54 ], [ 'karl', 29 ], [ 'vonnie', 37 ] ]
```