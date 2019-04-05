const mongoose = require('mongoose');
const Author = mongoose.model('Author');
mongoose.options.useFindAndModify = false;

module.exports = {
    index:  (request, response) => {
        Author.find({})
        .then(authors => {
            response.json(authors)
        })
        .catch(err => {
            response.json(err);
        })
    },
    show: (request, response) => {
        Author.findById(request.params.id)
        .then(author => {
            response.json(author)
        })
        .catch(err => {
            response.json(err);
        })
    },
    update: (request, response) =>{
        Author.findByIdAndUpdate(request.params.id, request.body, { new: true })
        .then(author => {
            response.json(author)
        })
        .catch(err => {
            response.json(err);
        })
    },
    create: (request, response) => {
        console.log(request.body)
        Author.create(request.body)
        .then(author => {
            response.json(author)
        })
        .catch(err => {
            response.json(err);
        })
    },
    destroy: (request, response) => {
        Author.findByIdAndRemove(request.params.id)
        .then(result => {
            response.json(author)
        })
        .catch(err => {
            response.json(err);
        })
    },
    createBook: (request, response) => {
        Author.findByIdAndUpdate(request.params.id, { $push: request.body })
        .then(author => {
            response.json(author)
        })
        .catch(err => {
            response.json(err);
        })
    }
}