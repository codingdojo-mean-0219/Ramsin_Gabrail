// require express, path, body-parser
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
// create the express app
var app = express();

app.use(bodyParser.urlencoded());
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// tell the express app to listen on port 6789
var server = app.listen(6789, function() {
	console.log("listening on port 6789");
})
//we're going to have /routes/index.js handle all of our routing
var route = require('./routes/index.js')(app, server);