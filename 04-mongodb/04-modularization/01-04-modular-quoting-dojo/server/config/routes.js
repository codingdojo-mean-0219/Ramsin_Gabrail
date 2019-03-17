const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/quoting_dojo');

const quoteSchema = new mongoose.Schema({
    name: String,
    quote: String
  });

const Quote = mongoose.model('quotes', quoteSchema);

module.exports = function(app){
    app.get('/', function(req, res) {
    res.render('index');
  });

app.get('/quotes', function(req, res) {
// Logic to grab all quotes and pass into the rendered view
Quote.find({}, function(err, quotes) {
    if (err) { console.log(err); }
    console.log(quotes);
    res.render('quotes', { quotes: quotes });
});
});
app.post('/quotes', function(req, res) {
Quote.create(req.body, function(err) {
    if (err) { console.log(err); }
    res.redirect('/quotes');
});
});
}