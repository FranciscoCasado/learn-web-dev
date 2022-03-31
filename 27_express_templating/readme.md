## Templates

Why templating? most sites use a standard *template* for displaying information, some times with slight variations, but the *layouts* are usually preserved along sites. Therefore, if we wanted to provide lots of pages, we wouldn't want to re-write over and over again the same html layout, so most web servers have *templating* tools. There are many templating engies out there, buy here we will use *Embedded JavaScript* (EJS), which is a *plain*JS, simple templating language. It is also very popular.


### Configuring Express for EJS

```sh
npm install ejs
```

```js
const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
```

Also add a `views` folder with the template `home.ejs`. Template files support plain html *and* JS :)

**fixing paths**

```js
const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
```

## EJS interpolation Syntax
The whole point of using templating is the ability to add logic to our pages, so the displayed content is built upon certain parameters.

EJS has a non-html tag syntax to encapsulate JS instructions. For example, the following code

```html
<h1> Did you know that 2+2 = <%= 2+2 > </h1>
```

Displays 
>  Did you know that 2+2 = 4 


We can also pass arguments inside objects (key/value pairs) so computation can be moved into the JS code, instead of over-populating the EJS templates:

```js
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('rand', {random_number: num});
})
```

```html
<h1> Random number served <%= random_number %> </h1>
```
