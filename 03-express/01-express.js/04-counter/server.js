// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.use(require('express-session')({
    secret: '0123',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000}
}));
app.get('/', function(req, res) {
    if (!req.session.count){
        req.session.count = 1;
    }
    else {
        req.session.count++;
    }

 res.render("index", {"count" : req.session.count});
})
app.get('/add2', function(req, res) {
    req.session.count ++;
    res.redirect('/');
});
app.get('/reset', function(req, res) {
    req.session.count = 0;
    res.redirect('/');
});
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});