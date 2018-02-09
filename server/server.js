/*** server.js ***/

// Required Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./database.js');

// Middleware
const userController = require('./user/userController.js');


const app = express();

app.use(express.static(__dirname +'../dist/')); //serves the index.html

/**
* Automatically parse urlencoded body content from incoming requests and place it
* in req.body
**/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.post('/api/login', (req, res) => {
  console.log('hi api/login backend');
  console.log('req.body ---> ', req.body);
});

app.post('/api/register', (req, res) => {
  console.log('hi api/login backend');
  console.log('req.body ---> ', req.body);
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});

module.exports = app;
