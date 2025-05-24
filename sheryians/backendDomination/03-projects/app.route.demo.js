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

app.post('/formPostRoute', (req, res) => {
  console.log(req.body);
  res.redirect('/')
})

app.route("/user")
  .get((req,res)=>res.send('Get for /user'))
  .post((req,res)=>res.send('POST for /user'))
  .patch((req,res)=>res.send('PATCH for /user'))
  .put((req,res)=>res.send('PUT for /user'))
  .options((req,res)=>res.send(`Supports GET POST PATCH PUT but doesn't support del`))


app.use((req, res) => {
  res.send('You have reached to a endpoint that is not listed')
})
app.listen(port);