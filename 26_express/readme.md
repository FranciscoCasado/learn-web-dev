## Create Servers with Express JS

### Install Express

```sh
npm i express
```

Create an express app 

```js
const express = require('express');

const app = express();
```

Make the express app listen for requests;

```js
const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
```

Send a response

```js
app.use((req, res) => {
    console.log("Got a request!");
    res.send("<h1>This is my web page!<h1>");
})
```

## Routing and handling requests

```js
const express = require('express');

const app = express();
const port = 3000;

app.listen(port , () => {
    console.log(`listening on port ${port}`);
})

/* Home route */
app.get('/', (req, res) => {
    console.log("Home request!");
    res.send("This is the homepage :) !")
})

app.get('/cats', (req, res) => {
    console.log("Cat request!");
    res.send("Meow!")
})

app.get('/dogs', (req, res) => {
    console.log("Dog request!");
    res.send("Woof!")
})
```

This only responds to `GET` requests because of the `app.get` routing. Whenever we need to respond to a `POST` request, we can route it using

```js
app.post('/cats', (req, res) => {
    console.log('Cat POST request')
    res.send('POST Cat')
})
```

Whenever we want to handle undefined routes as exceptions (or error), we can use the wildcard `*` as the path to the request, always at the end of our app JS file:

```js
app.get('*', (req, res) => {
    console.log("Unknown rout");
    res.send("I don't know that path :c")
})
```

### Routing patterns
Another way of handling routes is using patterns:

```js
app.get('/t/:topic', (req, res) => {
    console.log('topic request!');
    const { topic } =  req.params;
    res.send(`Welcome to the mighty <b>${topic}</b> topic!`)
})

app.get('/t/:topic/:id', (req, res) => {
    console.log('topic request!');
    const { topic, id } =  req.params;
    res.send(`Viewing post <b>${id}</b> of topic ${topic}`)
})
```

## Query Strings

```js
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('~ nothing found if nothing searched ~')
        return;
    };
    res.send(`<h1>Search results for ${q}</h1>`)
})
```

### Developing with Nodemon

Install

```sh
npm i -g nodemon
```

Run
```sh
nodemon src/index.js
```

works like a charm <3
