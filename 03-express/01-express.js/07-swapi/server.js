// require express
const express = require("express");
// path module -- try to figure out where and why we use this
const path = require("path");
// create the express app
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
const axios = require('axios');

require('./routes/index.js')(app);


// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});