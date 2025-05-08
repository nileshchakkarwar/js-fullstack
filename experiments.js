const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');

// setting up session middleware
const sessionMiddleware = session({
    resave: false,
    saveUninitialized: false,
    secret: "some temp secret"
});


const flashMiddleware = flash();
// Middleware to set up session and flash messages
app.use(sessionMiddleware, flashMiddleware);

// Route function to set up flash messages
app.get('/flash', (req, res) => {
    req.flash('info', 'Flash is back!');
    res.redirect('/show-flash');
});

// Route function to show flash messages
// This route will be called after the flash message is set
app.get('/show-flash', (req, res) => {
    const flashMessages = req.flash('info');
    res.send(flashMessages);
});

// flash message is empty this time coz it is already consumed
app.get('/try-access-flash-again', (req, res) => {
    const flashMessages = req.flash('info');
    res.send(flashMessages);
});

app.listen(3000);