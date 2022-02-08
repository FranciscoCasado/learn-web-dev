// THE CALLBACK VERSION
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
// THE PROMISE VERSION 
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


fakeRequestPromise('favkitten.com/page1')
    .then((data) => {
        console.log(data);
        return fakeRequestPromise('favkitten.com/page2')
    })
    .then((data) => {
        console.log(data);
        return fakeRequestPromise('favkitten.com/page3')
    })
    .then((data) => {
        console.log(data);
        return fakeRequestPromise('favkitten.com/page4')
    })
    .then((data) => {
        console.log(data);
        return fakeRequestPromise('favkitten.com/page5')
    })
    .then((data) => {
        console.log(data);
        return fakeRequestPromise('favkitten.com/page6')
    })
    .catch((err) =>{
       console.error(err) 
    });
    
const delayedColorChange = (color, delay) => {
    return new Promise( (resolve, rejecct) => {
        setTimeout( () =>{
            document.body.style.backgroundColor = color;
            resolve()
        }, delay)
    })
}

delayedColorChange('red', 500)
    .then( () => delayedColorChange('orange', 500))
    .then( () => delayedColorChange('yellow', 500))
    .then( () => delayedColorChange('green', 500))
    .then( () => delayedColorChange('lightblue', 500))
    .then( () => delayedColorChange('blue', 500))
    .then( () => delayedColorChange('indigo', 500))