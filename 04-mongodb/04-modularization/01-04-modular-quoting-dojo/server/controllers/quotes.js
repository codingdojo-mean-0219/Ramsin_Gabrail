const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/quoting_dojo');

const quoteSchema = new mongoose.Schema({
    name: String,
    quote: String
  });

const Quote = mongoose.model('quotes', quoteSchema);

module.exports = {
    index: function(req, res) {
        Quote.find({}, function(err,quotes) {
        if (err) { console.log(err); }   
        console.log(quotes);
        res.render('quotes', {quotes:quotes})
        });
    },
    create: function(req, res) {
    	Quote.create(req.body, function(err) {
            if (err) { console.log(err); }
        res.redirect('/quotes')
        });
    }   
};
