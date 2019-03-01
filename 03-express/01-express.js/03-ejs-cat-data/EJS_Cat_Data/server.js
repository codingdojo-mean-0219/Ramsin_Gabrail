const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.use('/images', express.static(__dirname + '/images'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.get('/cats', function(request, response) {
    response.render('index');
 });
app.get("/cuddles", function (request, response){
    var users_array = [
        {name: "Cuddles", food: "Iams", age: 3, sleep_spot: ["Under the bed", " In a sunbeam"]}
    ];
    response.render('details', {users: users_array});
});
app.get("/mittens", function (request, response){
    var users_array = [
        {name: "Mittens", food: "squirrerls", age: 13, sleep_spot: ["Bed", " hammock"]}
    ];
    response.render('details', {users: users_array});
});
app.get("/garfield", function (request, response){
    var users_array = [
        {name: "Garfield", food: "Lasagna", age: 5, sleep_spot: ["Anywhere"]}
    ];
    response.render('details', {users: users_array});
});


app.listen(8000, function() {
  console.log("listening on port 8000");
})