const express = require('express'),
  bodyParser = require('body-parser'),
  // mongoose = require('mongoose'),
  path = require('path'),
  port = 8000,
  app = express();
  

// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: false }));


// Point server to views
app.set('views', path.join(__dirname, 'views'));
// We're using ejs as our view engine
app.set('view engine', 'ejs');

require('./server/models/mongoose_quotes.js')
require('./server/config/routes.js')(app)
app.listen(port);
console.log('now listening on port 8000');