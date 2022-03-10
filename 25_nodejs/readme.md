# 25. Node JS

Node JS is a JavaScript *runtime* environment. Until recently, we could only use JS in a web browser. Node is the most popular implementation of JS runtime that executes code out of a browser.

This allows to have *server-side* applications that can do lots of things, using *packages*, which are libraries built by the community -*or yourself!*-, and having the ability to make applications in the same language as the *front-end* does. And, since it is supported in all operating systems, apps can be built and ported without having to re-compile for each platform.

Most common applications of Node are:
- Web servers
- Command line tools
- Native Apps (like VSCode!)
- Video Games
- *and much more!*

## Install Node
Go to the Node download page, get the installer and click to the end. Then open a terminal and enter `node`. If everything went right, it should look like this:

```sh
node
Welcome to Node.js v17.4.0.
Type ".help" for more information.
> 
```

## Running JS code with Node

As seen in previous sections, JS can be run with Node in two ways: the REPL command terminal and file execution.

### The Node Read-Evaluate-Print Loop

When we type `node` in the terminal, the program that starts running is a *Node* command terminal which has a REPL.
The Node REPL acts as an interactive programming interface, where we can type instructions or blocks of code an execute them as soon as they are entered. This is useful for quick test of functions and other properties.

### File execution

We can execute a file directly from node by typing the following:

```sh
node file.js
```

It performs, on an abstract level, the same logic as the web browser does, but using different top-level object. As discused before, with node, our top-level object is not the window, but the `process` instead.

### `process` & `argv`
The Node JS `process` object manages everything related with our file from a top-level perspective. One of its most important properties is `argv`, which stands for *argument values* and is an array containing every parameter passed when node was run. For example, consider the file `hello.js` with the following code:

`hello.js`:
```js
console.log(process.argv)
```

When executed from the terminal, it will out put the following:

```js
node hello.js
[
  '/path/to/node/17.4.0/bin/node',
  '/path/to/current-directory/hello.js'
]
```
The first element is the path node binary and the second is the path to the script that is being run. 


If we want to pass more arguments and use them, we can use the `slice` array method and do the following:

`hello.js`:
```js
const args = process.argv.slice(2);
for (let arg of args) {
    console.log(`Hi there, ${arg}!`)
}
```

The following command in the terminal would execute like this:
```sh
$ node hello.js John Mickey Donald
Hi there, John!
Hi there, Mickey!
Hi there, Donald!
```

## File System
Node JS incorporates a file system library to access data we have in our machine storage. We include the library in a script with the following command (recommended to be in the top of the files):

```js
const fs = requiere('fs');
```

## Modules, Packages & `npm`

### Creating a module 

Let's create a simple module called `math` as follows
```js
const add = (x,y) => x + y;
const PI = 3.1415;
const square = x => x * x;

module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;
```
In order to make objects available, we must explicitly state what is exported with `module.exports`.


Alternatively:

```js
const add = (x,y) => x + y;
const PI = 3.1415;
const square = x => x * x;

const math = {
    add: add,
    PI: PI,
    square: square
}

module.exports = math
```

Alternatively, again:
```js
module.exports.add = (x,y) => x + y;
module.exports.PI = 3.1415;
module.exports.square = x => x * x;
```

And also using a *shortcut*:
```js
exports.add = (x,y) => x + y;
exports.PI = 3.1415;
exports.square = x => x * x;
```
Keep in mind that this shortcut only works if `exports` has not been overidden by another variable declaration.

To *import* the code, at the top of our application we must `require` the module with the syntax:

```js
const math = require('./math');
```

Note that the path to the file is relative to the directory of the app file and prepends the `./` path to the name of the module file, without the `.js` extension.

### Requiring a directory

Let's say we want to include several modules in a directory that has the following structures:
```
app.js
shelter
├─ blue.js
├─ index.js
├─ janet.js
└─ sadie.js
```
A common pattern for making that process easy es to have an `index.js` file that does all the `require` and then exports everything together:

`index.js`
```js
const blue = require('./blue');
const janet = require('./janet');
const sadie = require('./sadie');

const allCats = [blue, janet, sadie];

module.exports = allCats;
```

Then, in our `app.js` file, we just simply import the whole directory with only one line of code:

```js
const cats = require('./shelter');
console.log(cats)
```

Notice that the `require` takes the folder name as argument, instead of `shelter/index.js`. This is possible thanks to the node `require` implementation that automatically looks for an `index.js` file when a folder is passed as argument.