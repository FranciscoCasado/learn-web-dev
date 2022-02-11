# 22. HTTP Requests with JS

## The Request-Response data cycle

*\*nice drawing of request sent to a server, made by a client, and the response the server sends back to the client, after processing the data\**

### Requests
Requests are always made to a *server* and can include several parameters and user-specific information, such as passwords, tokens and or keys to validate identity or permissions to access the data.

### Responses
Responses always contain one *status code*, which is a number that state the result of the request. The are defined by the HTTP standards. 


Also, a response  can have HTML description of a page, so the client browser can render it to the screen.

But in modern applications, we want to reload sites as few times as possible. To accomplish this, many servers implement web *Application Programming Interfaces* that allow the retrieval of the bits of data we need, upon requests. Then the client browser only needs to update that specific data, instead of re-rendering the whole page.

### AJAX & JSON
In past days, most requests were done using *Asynchronous JavaScript and XML* (AJAX) that worked with JS requests an HTTPXML formats, however, in present days, the *XML* format is very uncommon and has been replaced with *JavaScript Object Notation*, which is *almost* the same as the way we write JS object literals. It is not exactly the same because it does not support `undefined` and other types, but it support most common primitive data types.

Common JSON methods used in applications:
- `JSON.parse`
- `JSON.stringify`

## The Fetch API
It's useful and far more easy to use than *XML HTTP Requests* (XHR). But it does not provide the data straight away. We have to do at least two steps: fetch and wait for the data.
```js
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => response.json())
    .then(data => console.log(data.name))
    .catch(error => console.error('Request Failed'));

```

To overcome this *issue*, we can wrap the fetch in another async function:
```js
const fetchPokemon = async (pokemon_name) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`);
        const data = await res.json();
        console.log(data.name)
    } catch (e) {
        console.error('Something went wrong', e)
    }
};
```
It's not the best, but it is ok :)

## Axios
Axios is an open sourced JS library that allows to do the fetching far easier. The request has only one step:
```js
axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(res => console.log(res.data.name))
    .catch(err => console.log("Something went wrong :c", err))
```

And it can be wrapped not because of the step, but for error handling:
```js
const fetchPokemon = async (pokemon_name) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
        console.log(res.data.name);
    } catch (e) {
        console.log('Somthing went wrong :c', e);
    }
};
```

