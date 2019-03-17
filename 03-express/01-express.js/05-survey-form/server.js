// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index");
});
app.post('/results', function(req, res) {
    var users_array = 
        {name: req.body.name,
        dojo: req.body.dojo_location,
        lang: req.body.favorite_language,
        comment: req.body.comment
        }
    ;
    console.log(req.body.name);
    res.render("results", {user: users_array});
   });

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});