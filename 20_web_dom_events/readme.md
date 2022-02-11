# 20. Document Object Model Events

This section covers how to respond to user inputs and actions: the most powerful features of the web!

By default, we can access events in the attributes of some elements, but it is not recommended to do so:
```html
<button onclick="alert('you clicked me!')">Click Me!</button>
```

With JS we can achieve that behaviour in a much more friendly and mantainable way:
```js
const btn = document.querySelector('button');
btn.onclick = () => {
    console.log('clicked!')
}
```
**But wait!**
There is a much better way to handle events using event listeners with the `addEventListener` method:

```js
const btn = document.querySelector('button');
btn.addEventListener(
    'click',
    () => { console.log('clicked!') },
    { once: true }
);
```
Why is it better? Some of the reasons are:
- `addEventListener` allows to have as many functions as we want associated with the same event type. On the contrary, the property assignement will always override the function if we assign more than one (the last will prevail).
- `addEventListener` also accepts `options` that allow better control of how the functions are bound, for example:
    ```js
    const btn = document.querySelector('button');
    btn.addEventListener(
        'click',
        () => { console.log('clicked!') },
        { once: true }
    );
    ```
    
## Event listeners and `this`
Supose we have several elements in a document that we want to *colorize* when clicked, i.e.: change its background color:

```js
const buttons = document.querySelectorAll('button');
for (let button of buttons){
    button.addEventListener('click', function () {
        button.style.backgroundColor = randomColor();
    })
}

const paragraphs = document.querySelectorAll('p');
for (let p of paragraphs){
    p.addEventListener('click', function () {
        p.style.backgroundColor = randomColor();
    })
}
```

We could be repeating the same logic inside the callbacks, but there is a better way:

```js
function colorize() {
    this.style.backgroundColor = randomColor()
};

const buttons = document.querySelectorAll('button');
for (let button of buttons){
    button.addEventListener('click', colorize);
}

const paragraphs = document.querySelectorAll('p');
for (let p of paragraphs){
    p.addEventListener('click', colorize);
}
```

Then we can use this to extend the behaviour to any othe element we wnant and the `this` keyword will do de work of identifying the context object from which it has been called :)

## Event objects

When working with keyboard events, such as key press or release, or mouse events, the `addEventListener` provides an object that contains the information of the key that triggered the event:
```js
const input = document.querySelector('input');
input.addEventListener('keydown', function (e) {
    console.log(e)
})
```
**Important:** This binding will trigger the event only when the element is focused, which only work with inputs!

If we want to trigger the event *globally*, we must bind the callback to the `window` object

## Form events

By default, forms perform an acation right after being submitted. Commonly, we don't want that behaviour because it generally takes the user to another page and reloads the browser. To prevent this, we can add `preventDefault()` to the event that is being called when we define the callback for an event listener:

```js
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    /** do something else **/
});
```

## Input and Change events

Changes when we leave the user clicks outside the input element, after editing its value:
```js
input.addEventListener('change', function (e) {
    console.log(input.value);
})
```

Changes whenever the value of the input element changes:
```js
input.addEventListener('input', function (e) {
    console.log(input.value);
})
```

## Event bubbling
Some times, the same event can trigger events of an element an one or more of its succesive parents. 

```html
<div class="container">
    <button> Click me!</button>
</div>
```

```js
const container = document.querySelector('.container');
container.addEventListener('onclick', function (e) {
    /* Do something */
});

const button = document.querySelector('button');
button.addEventListener('onclick', function (e) {
    /* Do other things */
    e.stopPropagation();
});
```

## Event Delegation
Bind events to the parent of an element that *might* exist in the future, but still be bound to the child when it is created:

```js
list.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
})
```