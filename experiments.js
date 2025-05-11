const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;


app.use(morgan('short'));
app.get('/',(req,res)=>{
  res.send('Demo to view Morgan interceptor')
})

app.listen(port);

// ::1 - GET / HTTP/1.1 304 - - 15.906 ms