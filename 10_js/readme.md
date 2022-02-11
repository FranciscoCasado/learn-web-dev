# 10. The wonderful world of JavaScript
JS can be run headless in a server or control the logic of html pages in many modern browsers. From interactive menus and galleries, to chatboxes inside a shop web page, JS can manage whatever happens inside a page and we can define the logic of how it happens :)

## How to execute JS code


### Run JS code from a file using node
We can run JS files from a terminal with `node`.
```sh
$ node hello_world.js
Hello World!
```

### Run JS code from a file using the web browser
Web browsers will only execute code that is bound to an html file, so if we want to run JS scripts, we must add them to our html head. Lets say we have our `app.js` file and we want to run it along with `index.html`. We must include the following:
```html
<head>
    ...
    <script src="hello_world.js"></script>
</head>    
```

Nothing will be displayed in the browser, however in the console of the developer tools we will see the output 'Hello World!'


## Print outputs

If we run code from files, either within a web-browser or with node, it is always necessary to explicitly print the outputs:

In a file:
```js
1 + 4;                  // does not print
console.log(1 + 4);     // prints 5

"Hello!";               // does not print
console.log("Hello!");  // prints 'Hello!'
```

However,in any web browser you can open a console in the developer tools, which come with a powerful feature: they work in a *Read Evaluate Print Loop* (REPL), which means that every statement we input into the console will be evaluated and the result will be printed back at us.

In a *web browser console*, every result of a statement will be printed.

```js
1 + 4;          // prints 5
"Hello!";       // prints 'Hello!'
```
Furthermore, there are some functions to prompt results in different ways:

```js
console.log("Hello")        // prints 'Hello'
console.warn("Uh oh!")      // prints 'Uh oh!' in yellow background
console.error("Fatal")      // prints 'Fatal' in red background

alert("Hi There!")              // pops a block that the user must accept
prompt("Please enter a number") // pops a bock where the user can enter an input
```