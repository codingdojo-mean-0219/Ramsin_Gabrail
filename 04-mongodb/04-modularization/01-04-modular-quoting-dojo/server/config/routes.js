const mongoose = require('mongoose')
var quoteData = require('./../controllers/quotes.js')

module.exports = function(app){
    app.get('/', function(req, res) {
        res.render('index');
    });
    app.get('/quotes', function(req, res) {
        quoteData.index(req, res);
    });
    app.post('/quotes', function(req, res) {
        quoteData.create(req, res);
    });

}
