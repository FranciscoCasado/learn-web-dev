'use strict';
var console;
var document;

function randomColor () {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    }
}

var h1 = document.querySelector('h1')

function randomBackgroundColor() {
    const color = randomColor();
    let h1Color;
    let bgColor = `rgb(${color.r},${color.g},${color.b})`
    if (Object.values(color).some( c => c < 50)){
        h1Color = 'white';
    } else { 
        h1Color = 'black';
    }
    h1.innerText = bgColor;
    h1.style.color = h1Color;
    document.body.style.backgroundColor = bgColor;

}

const btn = document.querySelector('button');
btn.addEventListener('click', randomBackgroundColor);

btn.addEventListener('keydown', (e) => {console.log(e)})
h1.addEventListener('keydown', (e) => {console.log(e)})