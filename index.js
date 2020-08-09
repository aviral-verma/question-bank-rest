const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const cors = require('./middlewares/cors');

const app = express(); // const server = http.createServer(callback);
const port = 3000;

// register bodyParser middleware with express
app.use(bodyParser.json());

// register a middleware, which enables CORS
app.use(cors());

// REST endpoint to check the login credentials
app.post('/login', require('./handlers/login'));

// middleware to check if the request contains JWT token in the form of a header, and 
// allow the user to access any routes, only if the JWT is present and not-tampered
app.use(require('./middlewares/auth.js'));

// register a handler (listener) for GET (http method) for '/questionbanks' URL
app.get('/questionbanks', require('./handlers/get-all-questionbanks'));
app.get('/questionpapers', require('./handlers/get-all-questionpapers'));
app.post('/questionbanks/:name', require('./handlers/add-new-questionbank'));
app.get('/questionbanks/:questionId', require('./handlers/get-one-questionbank'));
app.post('/questionbanks/questionb/:name', require('./handlers/add-new-question'));
app.delete('/questionbanks/:questionbank', require('./handlers/delete-questionbank'))

// HTTP POST request handler mapping

app.listen(port, function () { console.log(`server started at port ${port}`); });
