// Dependencies
const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 3000;

// Create express app
const app = express();

// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));

// Tell server where views are and what templating engine I'm using
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Create connection to database
const connection = mongoose.connect("mongodb://localhost/lions_db");

// Create lion schema and attach it as a model to our database
const LionSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});

// Mongoose automatically looks for the plural version of your model name, so a Lion model in Mongoose looks for 'lions' in Mongo.
const Lion = mongoose.model('Lion', LionSchema);

// Routes go here!
app.get('/', function(req, res){
  Lion.find({}, function(err, results){
    if (err) { console.log(err); }
    console.log(results);
    res.render('index', { lions: results });
  });
});

// Create
app.post('/', function(req, res){
    // Create a new lion!
    Lion.create(req.body, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/')
    });
  });
// New
app.get('/new', function(req, res){
  res.render('new');
});

// Show
app.get('/lions', function(req, res){
  Lion.find({}, function(err, response) {
    if (err) { console.log(err); }
    res.render('show', { lions: response });
  });
});

app.get('/:id/edit/', function(req, res){
  Lion.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    console.log(response);
    res.render('edit', { lions: response });
  })
});

// Update
app.post('/:id', function(req, res){
  Lion.update({ _id: req.params.id }, req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});

// Delete
app.post('/:id/delete', function(req, res){
  Lion.remove({ _id: req.params.id }, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});


app.listen(port, function(){
  console.log("Running on ", port);
});