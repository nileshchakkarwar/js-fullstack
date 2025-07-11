const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(3000);

// ---------------------------------------------------------------------------
const express = require('express');
const app = express();
const port = 3000;

/*Fundamental structure app.get(route, routeHandlerCallbackFunction)
request that comes inside 
response that goes out from server 
get is the implementation of the route*/

/*app.get('/', (req⬇️, res⬆️) => {
  res.send('Hello World!');
});*/
app.get('/', (req, res) => {
  res.send('Hello World!');
});