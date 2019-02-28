const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.use('/images', express.static(__dirname + '/images'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.get('/cars', function(request, response) {
   response.render('cars');
});
app.get('/cats', function(request, response) {
    response.render('cats');
 });
 app.get('/form', function(request, response) {
    response.render('new');
 });
app.listen(8000, function() {
  console.log("listening on port 8000");
})