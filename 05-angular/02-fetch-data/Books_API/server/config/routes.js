const author_controller = require('../controllers/authors');
const router = require('express').Router();
console.log(author_controller);
module.exports = router
    .get('/', author_controller.index)
    .get('/:id', author_controller.show)
    .post('/', author_controller.create)
    .put('/:id', author_controller.update)
    .delete('/:id', author_controller.destroy);