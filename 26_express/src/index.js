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

app.get('/cats', (req, res) => {
    console.log("Cat request!");
    res.send("Meow!")
})

app.get('/dogs', (req, res) => {
    console.log("Dog request!");
    res.send("Woof!")
})


app.get('*', (req, res) => {
    console.log("Unknown rout");
    res.send("I don't know that path :c")
})