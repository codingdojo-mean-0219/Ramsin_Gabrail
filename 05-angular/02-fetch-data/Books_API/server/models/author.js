const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthorSchema = new Schema ({
    first_name : {
        type: String, 
        required: [true, 'Author name is required'],
        minlength: [3, 'First Name must be at least three characters'],
        trim: true 
    },
    last_name : {
        type: String, 
        required: [true, 'Author name is required'],
        minlength: [3, 'Last Name must be at least three characters'],
        trim: true 
    },
    country : {
        type: String
    },
    birthdate: {
        type: String
    },
    books: [{
        title: {
            type: String, 
            required: true, 
            minlength: [2, 'Title must be at least two characters']
        },
        year: {
            type: Number, 
            max:2019
        },
    }]
},
{timestamps: true});
AuthorSchema.plugin(uniqueValidator, {message: 'must be unique'});

module.exports = mongoose.model('Author', AuthorSchema);