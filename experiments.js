const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs') //setting view engine
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/form', (req, res) => {
  console.log(req.query);
})
app.use((req, res) => {
  res.send('You have reached to a endpoint that is not listed')
})
app.use((err, req, res, next) => {
  res.send(err.message);
})
app.listen(port);