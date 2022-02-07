'use strict';
var console;
var document;

var form = document.querySelector('form');
var input = document.querySelector('input');
var list = document.querySelector('#list')

form.addEventListener('submit', function (e) {
    e.preventDefault(); // this prevents the default behavior
    if (!input.value) { return}
    const newItem = document.createElement('li');
    newItem.innerText = input.value;
    list.appendChild(newItem);
    input.value = '';
    input.placeholder = 'What else?'
})
