const express = require('express');
const app = express();

function middleFunc1(req, res, next) {
    console.log('In middleFunc1');
    next();
}

function middleFunc2(req, res, next) {
    console.log('In middleFunc2');
    next();
}

function middleFunc3(req, res, next) {
    console.log('In middleFunc3');
    next();
}

app.use(middleFunc2, middleFunc1);

app.get('/', (req, res) => {
    res.send('Testing Middleware');
})

app.listen(3000);