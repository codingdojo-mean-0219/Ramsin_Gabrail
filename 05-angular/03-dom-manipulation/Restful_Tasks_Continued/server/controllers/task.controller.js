const Task = require('mongoose').model('Task');
const errorHandler = require('./concerns/error-handler');
console.log("are we in the controller?")
module.exports = {
  index: (req, res) => {
    console.log("i'm in the index eri!");
    Task.find({},(err,task)=>{
    res.json(task);
    })
},
  show(request, response) {
    Task.findById(request.params.id)
      .then(task => response.json(task))
      .catch(errorHandler.bind(response));
  },
  create(request, response) {
    Task.create(request.body)
      .then(task => response.json(task))
      .catch(errorHandler.bind(response));
  },
  update(request, response) {
    Task.findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then(task => response.json(task))
      .catch(errorHandler.bind(response));
  },
  destroy(request, response) {
    Task.findByIdAndRemove(request.params.id)
      .then(result => response.json(result))
      .catch(errorHandler.bind(response));
  },
};