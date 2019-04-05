const Lion = require('mongoose').model('Lion');

module.exports = {
    index: (req, res) => {
        Lion.find({}, function(err, results){
          if (err) { console.log(err); }
          console.log(results);
          res.render('index', { lions: results });
        });},
    create: (req, res) => {
        Lion.create(req.body, function(err, result){
          if (err) { console.log(err); }
          res.redirect('/')
        });},
    new: (req, res) => {
        res.render('new');
      },
    show: (req, res) => {
        Lion.find({}, function(err, response) {
          if (err) { console.log(err); }
          res.render('show', { lions: response });
        });
      },
    edit: (req, res) => {
        Lion.find({ _id: req.params.id }, function(err, response) {
          if (err) { console.log(err); }
          console.log(response);
          res.render('edit', { lions: response });
        })
      },
    update: (req, res) => {
        Lion.update({ _id: req.params.id }, req.body, function(err, result){
          if (err) { console.log(err); }
          res.redirect('/');
        });
      },
    delete: (req, res) => {
        Lion.remove({ _id: req.params.id }, function(err, result){
          if (err) { console.log(err); }
          res.redirect('/');
        });
      }

}