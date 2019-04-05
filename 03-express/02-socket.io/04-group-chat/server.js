const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// tell the express app to listen on port 8000
const server = app.listen(8000, function() {
  console.log("listening on port 8000");
});

// load the routes file, pass app and server into it (for handling url visits and events)
require('./routes/index.js')(app, server);