const express = require('express');
const path = require('path');
const topicsData = require('./data.json');

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('rand', {random_number: num});
})

app.get('/cats', (req, res) => {
    const cats = ['Blueberry', 'Black', 'Sprinkle'];
    res.render('cats', {cats});
})

app.get('/t/:topic', (req, res) => {
    const { topic } = req.params;
    const data = topicsData[topic];
    if (! data ){
        res.render('404', { topic })
    }
    res.render('topic', {...data});
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})