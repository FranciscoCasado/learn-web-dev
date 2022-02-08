# JS `async`

## The call stack
JS, as many other languages, has a call stack that stores all the functions that have been called and yet to be resolved. Its data structure is a stack, so last in first out.

## JS is single threaded
But browsers implement behaviours where JS can hand off the job to the browser, keep executing the code and then the browser answers with the result.

## Handling the timing
This code will wait during *almost* the same period of time to change colors, so we will only see 1 color change
```js
setTimeout( () => {
    document.body.style.backgroundColor = 'red'
}, 1000);

setTimeout( () => {
    document.body.style.backgroundColor = 'orange'
}, 1000);
```

Instead, what we can do is *nest* the callbacks

```js
setTimeout( () => {
    document.body.style.backgroundColor = 'red';
    setTimeout( () => {
        document.body.style.backgroundColor = 'orange'
        }, 1000);
    }, 1000);
```

Or in a more *"""readable"""* way:
```js
const delayedColorChange = (color, delay, doNext) => {
    console.log(color);
    setTimeout( ()=> {
        document.body.style.backgroundColor = color;
        doNext && doNext();
    }, delay);
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('green', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('blue', 1000, () => {
            });
        });
    });
});
```

This is a mess and in web applications there are lots of jobs that need to wait for something to be completed, for example, lets say we have a function that makes a request to a fake server url and executes a `success` callback or `failure` callback, depending on if it reached the timeout:
```js
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
```
If we try to build a simple application of two succesive requests, things get real messy:
```js

fakeRequestCallback('books.com/page1',
    (response) => {
        console.log("It worked :)")
        console.log(response)
        fakeRequestCallback('books.com/page2',
            (response) => {
                console.log("It worked :)")
                console.log(response)
            },
            (err) => {
                console.log("Failed :c")
            });
    },
    (err) => {
        console.log("Failed :c")
    }
);
```
And we have only two nested requests!!

The `Promise` approach simplifies this with the following syntax:
```js
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (1500)) + 500;
        setTimeout(() => {
            if (delay > 1500) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}
```

```js
fakeRequestPromise('favkitten.com/page1')
    .then(data => {
        console.log(data);
        return fakeRequestPromise('favkitten.com/page2')
    })
    .then(data => {
        console.log(data);
        return fakeRequestPromise('favkitten.com/page3')
    })
    .then(data => {
        console.log(data);
        return fakeRequestPromise('favkitten.com/page4')
    })
    .catch(err =>{
       console.error(err) 
    });
```

## Promises

```js
    
const delayedColorChange = (color, delay) => {
    return new Promise( (resolve, rejecct) => {
        setTimeout( () =>{
            document.body.style.backgroundColor = color;
            resolve()
        }, delay)
    })
} 

delayedColorChange('red', 500)
    .then(() => delayedColorChange('orange', 500))
    .then(() => delayedColorChange('yellow', 500))
    .then(() => delayedColorChange('green', 500))
    .then(() => delayedColorChange('lightblue', 500))
    .then(() => delayedColorChange('blue', 500))
    .then(() => delayedColorChange('indigo', 500)) 
```


## `async` functions
:sparkles: Syntax sugar for promises :sparkles:

`async` function declaration makes the function return a `Promise`. The status of the `Promise` is determined through the following rules:
- If the function returns something, *anything*, the `Promise` will be considered resolved
- If the function throws an error, the `Promise` will be rejected.


```js
const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials';
    if (password === 'kittycats') return 'Welcome';
    throw 'Invalid password'
}

login('Rue')
    .then(msh => console.log(msg))
    .catch(err => console.log(err))
```

## `await`
```js
async function rainbow() {
    await delayedColorChange('red', 500)
    await delayedColorChange('orange', 500)
    await delayedColorChange('yellow', 500)
    await delayedColorChange('green', 500)
    await delayedColorChange('blue', 500)
    await delayedColorChange('indigo', 500)
    await delayedColorChange('violet', 500)
}

async function printRainbow() {
    await rainbow();
    console.log("Finished rainbow");
}
```

## Handling rejected `Promises` inside `async` functions
Use `try`/`catch` :)

```js
async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page1');
        console.log(data2);
    } catch (e) {
        console.log("Error:", e)
    }
}
```


 

