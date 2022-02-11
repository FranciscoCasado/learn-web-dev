# Prototypes, Classes and Object Oriented Programming
In this chapter we cover the JS flavour of Object Oriented Programming (*OOP*). Most important

## Object Prototypes
Quoting [MDN](https://developer.mozilla.org/en/docs/Learn/JavaScript/Objects/Object_prototypes) article:
> *Object prototypes* are the mechanism by which JS objects inherit features from one another.
...
>Objects can have a *prototype* object that acts as a *template*

For example, if we look at arrays that are created with the squared brackets notation, they have no associated methods, however, it is possible to call several methods like `push()`, `length`, etc. This is possible because the `Array` has a `__proto__` property that is the *template*, which contains the methods that the `Array` can inherit. Take a look at the following console inputs and outputs:
```js
> const a = [2, 3, 4]
3
```
```js
> a.sing = () => console.log("La La La!");
() => console.log("la la la")
```
```js
> a
[2, 3, 4, sing: ƒ]
```

```js
> a.__proto__
[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
```

### Prototype definitions & `__proto__` instances
Prototypes definitions can be accessed by their *class* names using the syntax `Class.prototype`. for example, `String.prototype` is the definition for `String` *template* objects and `Array.prototype` is the definition for `Array` *template* objects. 

If we want to access the prototype *instance* (not the class) of an object, the syntax is `obj.__proto__`, like we previously did for the array `a`.

### Add and modify prototype methods

Prototypes can be edited so methods can be overriden and new methods can be created. This changes will remain until the application is closed, when running with node, or when the browser refreshes:

```js
String.prototype.yell = function () {
    return `${this.toUpperCase()}!!!!!1`;
}:

console.log("hi there".yell()) // prints 'HI THERE!!!!!1'
```

One important note is that even though redefining and/or adding new methods to prototypes is possible, it it nod a good practice to do so.

## Factories

```js
function makeColor(r, g, b) {
    const color = {}
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function () {
        const { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    return color;
}
```
The problem with this approach is that every object has its own definition for every method, i.e., every time an object is created, all functions are created from scratch and are saved. This is bad for our cpu and memory resources.

If you exectute at the following code, you will notice that every color object has its own rgb, but `Strings`, for example, have the exact same methods (or method references, to be exact).

```js
const black = makeColor(0, 0, 0);
const white = makeColor(255, 255, 255);

black.rbg === white.rgb // returns false!
```

```js
"hi".slice === "bye".slice  // returns true!
```
This is possible because `Strings` hav their methods defined in their prototypes! The feature that makes it possible is the `new` keyword.

## Constructors (the old ways)

Take a look at the following function. It returns nothing, more over, the `this` points to the *top-level object*, because the function scope is global. 
```js
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b
}
```
However, we can use this function as a *constructor*, which is a *waaay* better solution for creating objects than factories. This is accomplished by calling the function with the `new` keyword just before:

```js
const black = new Color(0, 0, 0);
```

The `new` keyword perform the following steps:
1. Create a *blank*, plain JS object
2. Link (*set the constructor of*) this object to another object, using the function as *constructor*
3. Pass the newly created object. from step 1, as the `this` context
4. Returns if the function does not return its own object.

Note that the `black` object has `r`, `g` and `b` as properties, as well as `__proto__`.

If we want to add methods, we can do as we did when modifying the `String.prototype`:

```js
Color.prototype.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    
Color.prototype.hex = function () {
        const { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
```

If we now test the method reference, we see that the functions for two objects, built by this constructor, share the same reference, but the methods return values depending on the `r`, `b` and `g` properties of each object, thanks to the `this`:

```js
const black = new Color(0, 0, 0);
const white = new Color(25, 255, 255);

black.rgb === white.rgb;    // returns true!
console.log(black.rgb());   // prints 'rgb(0, 0, 0)'
console.log(white.rgb());   // prints 'rgb(255, 255, 255)'
```

## Classes
:sparkles: Syntax sugar for constructors :sparkles:

```js
class Color {
    constructor(r, g, b, name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    
    rgb () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    
    hex () {
        const { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    
};
```

## Inheritance

```js
class Cat {
    constructor (name) {
        this.name = name
    }
    eat() {
        return `${this.name} is eating`;
    }
    meow() {
        return `Meooowww!!!`
    }
}


class Dog {
    constructor (name) {
        this.name = name
    }
    eat() {
        return `${this.name} is eating`;
    }
    bark() {
        return `Woof Wooof!!!`
    }
}
```

### `extend`
```js
class Pet {
    constructor (name) {
        this.name = name;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Cat extends Pet {
    meow() {
        return `Meooowww!!!`;
    }
}

class Dog extends Pet {
    bark() {
        return `Woof Wooof!!!`;
    }
    
}
```

### `super`
```js
class Cat extends Pet {
    constructor (name, age, livesLeft = 9){
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return `Meooowww!!!`;
    }
}
```


## Example Summary
Converting Colors & Crazy Math