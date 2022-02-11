# 14. JS object literals

In JS is very common to store information by using *object literals*, which are collection of data, like arrays, but instead of having slots and indices, we have *properties*, which are *key-value* pairs.

The key is the label necessary to access the data of a property, like the indices in arrays.

```js
const fitBitData = {
   totalSteps:          308727,
   totalMiles:          211.7,
   avgCalorieBurn:      5755,
   workoutsThisWeek:    '5 of 7',
   avgGoodSleep:        '2:13'
};
```

As well as arrays, object literals are references and we access the information by using the keys:

```js
const person = {firstName: 'Mick', lastName: 'Jagger'};
console.log(person.firstName);  // prints 'Mick'
console.log(person.["firstName"]);  // prints 'Mick'
console.log(person.lastName);  // prints 'Jagger'
console.log(person["lastName"]);  // prints 'Jagger'
```

Why do both syntax exist? 
1. JS converts every key to a string when creating the properties, so every word or set of characters can be a key. Thus we can use the dot notation whenever a key is a *word*, but not when it has a number or special characters at the begining 
2. To sort this, the brackets notation comes handy, because it can be used with any string
3. Also, bracket notation allows the creation of new properties when the object literal has already been created

```js
const person = {firstName: 'Mick', lastName: 'Jagger'};
person['age'] = 78;
console.log(person);    // { firstName: 'Mick', lastName: 'Jagger', age: 78 }
```


Objects values can be anything: primitive data types, arrays or even objects! 

```js
const product = {
    name: "Gummy Bears",
    inStock: true,
    price: 1.99,
    flavors: ["grape", "apple", "cherry"]
}
```

Two of the most common data patterns is having both arrays and object literals combined:

```js
const shoppingCart = [
    {
        product: 'Jenga Classic',
        price: 6.88,
        quantity: 1,
    },
    {
        product: 'Risk',
        price: 24.33,
        quantity: 1,
    },
    {
        product: 'Scrabble',
        price: 16.99,
        quantity: 2,
    },
    
];
```

```js
const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['Music', 'Art'],
    exams: {
        midterm: 92,
        final: 88,
    }
};
```

## Destructuring arrays

```js
const student = {
    firstName: 'David',
    lastName: 'Jones'
};

const {firstName, lastName} = user;

console.log(firstName);     // 'David'
console.log(lastName);      // 'Jones'
```