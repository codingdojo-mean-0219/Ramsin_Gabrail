const lions = require('../controllers/lions');

module.exports = function(app) {
app.get('/', lions.index);

app.post('/', lions.create);

app.get('/new', lions.new);

app.get('/lions', lions.show);

app.get('/:id/edit/', lions.edit);

app.post('/:id', lions.update);

app.post('/:id/delete', lions.delete);

}