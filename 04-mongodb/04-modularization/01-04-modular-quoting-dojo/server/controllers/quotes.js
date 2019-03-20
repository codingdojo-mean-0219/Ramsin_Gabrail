var mongoose = require('mongoose')
const quoteSchema = new mongoose.Schema({
    name: String,
    quote: String
  });
var Quote = mongoose.model('Quote', quoteSchema);

module.exports = {
    index: function(req, res) {
        Quote.find({}, function(err,quotes) {
        if (err) { console.log(err); }   
        console.log(quotes);
        res.render('quotes', {quotes:quotes})
        });
    },
    create: function(req, res) {
        var quote = new Quote({name:req.body.name, quote:req.body.quote});
    	Quote.create(req.body, function(err) {
            if (err) { console.log(err); }
        res.redirect('/quotes')
        });
    }   
};
