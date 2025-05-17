const express = require('express');
const app = express();

// note even if the username is right in front it is accessed using
// req.param.username
app.get('/profile/:username', (req,res)=>{
  res.send(`This is the username entered in URL - ${req.params.username}`);
});

app.listen(3000);