const express = require('express');
const app = express();
const port = 3000;

// notify the express engine that use ejs template
app.set('view engine', 'ejs');

// instead of res.send since we want html indicate to render res.render
app.get('/', (req,res)=>{
  res.render('index')
})

// ----- default route
app.use((req, res)=>{
  res.send('You have entered a unknown url');
})

// ---------------------------------------------
app.listen(port);