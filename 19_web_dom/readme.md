# The Document Object Model

The DOM is a JavaScript representation of the elements that are contained in a page. It is a tree where the nodes are the html elements.

In a browser document object can be accessed `document`. The actual JS object can be seen with `console.dir(document)`. 



## Selecting elements

- `document.getElementById(id)`: fetch the element of the document that matches the `id`  (as a string). Returns the object that represents the element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unicorn</title>
</head>
<body>
    <h1 id="mainheading">I &hearts; unicorns</h1>
    <img src="https://devsprouthosting.com/images/unicorn.jpg" id="unicorn" alt="unicorn">
</body>
</html>
```
Fetching the image and the heading of the html above is accomplished by the following js script:
```js
const image = document.getElementById('unicorn');
const heading = document.getElementById('mainheading');
```


- `document.getElementsByTagName(tag)`: fetch *all* the elements of the document that match the specified tag (as a string). Returns an *html collection* which is an array-like of objects that represent all the matching html elements.
Since it is not an array, we do not have acces to array methods we saw before (filter, map, etc.), but we can still iterate through them:

```js
const allImages = document.getElemetsbyTagName('img');
console.log(allImages.length);      // prints the number of images in the document

for (let e of allImages) {
    console.log(e.src)          // prints the 'src' attribute of every image
}
```
- `document.getElementsByClassName(class)`: fetch *all* the elements of the document that match the specified class (as a string). Returns an *html collection* which is an array-like of objects that represent all the matching html elements.


## Query Selector

A modern way of fetching the elements of a document in a more concise way. It returns the first element in the DOM tree that matches the specified one of the identifiers:

```js
document.querySelector('p a');
```
The `querySelectorAll()` variant returns all the elements that match the specified identifiers.


# Manipulating

Once we have fetched an element, then we can alter its properties by simply setting them:
```js
document.querySelector('p').innerText = 'This is the new text :)';
```

```js
const allLinks = document.querySelectorAll('a');
for (let link of allLinks) {
    link.innerText = "I AM A LINK!"
}
```

It is important to know common attributes that can be edited:
- `innerText`: all the text that belongs to an element
- `innerHTML`: all de *markup* that belongs to an element *and* that is being displayed.
- `textContent`


## `getAttribute` and `setAttribute`

# Change Styles

## Inline styles
```js
const h1 = document.querySelector('h1');
h1.style.color = 'green';
h1.style.fontSize = '15em';

const allLinks = document.querySelector('a');
for (let link of allLinks){
    link.style.color = 'rgb(100,100,100)';
    link.style.fontFamily = 'sans-serif';
}
```
## Manipulate classes
We can do this:
```js
const h1 = document.querySelector('h1');
h1.getAttribute(class);
h1.setAttribute(class, 'border');
```

But its cumbersome, so we can actually access the list of classes:
```js
h1.classList.add('purple')
h1.classList.remove('purple')
h1.classList.toggle('purple')   // adds or removes 
```

# Traverse through elements

```js
const firstBold = document.querySelector('b');
firstBold.parentElement;    // accesses the parent element
firstBold.children;         // returns an HTMLCollection of children (array-like)
```

```js
const squareImg = document.querySelector('.square');
squareImg.previousElementSibling;
squareImg.nextElementSibling;
```

# Create and remove elements

## Append child
```js
const newImg = document.createElement('img');  // creates an *empty* image
newImg.src = 'hhttps://upload.wikimedia.org/wikipedia/commons/7/75/Cute_grey_kitten.jpg';
document.body.appendChild(newImg)
```
## Insert as sibling
```js
const h2 = document.createElement('h2');
h2.append("This is an h2");
const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', h2);   // inser h2 after h1 ends
```
There are for `position` values that can be used:
- `beforebegin`: just before the target element
- `afterbegin`: insert inside target element as first child
- `beforeend`: insert inside target element as last child
- `afterend`: just after the target element

## remove and removeChild
```js
const b = document.querySelector('b')
b.parentElement.removeChild(b);
```

This does the same job but its called directly in the node:
```js
b.remove();
```

