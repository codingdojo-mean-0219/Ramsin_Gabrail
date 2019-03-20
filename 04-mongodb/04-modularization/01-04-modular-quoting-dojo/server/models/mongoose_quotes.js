const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/quoting_dojo');
const quoteSchema = new mongoose.Schema({
    name: String,
    quote: String
  });
var Quote = mongoose.model('quotes', quoteSchema);
module.exports = Quote;