const task_controller = require('../../controllers/controller');
const router = require('express').Router();

module.exports = router
    .get('/', task_controller.index)
    .get('/:id', task_controller.show)
    .post('/', task_controller.create)
    .put('/:id', task_controller.update)
    .delete('/:id', task_controller.destroy);