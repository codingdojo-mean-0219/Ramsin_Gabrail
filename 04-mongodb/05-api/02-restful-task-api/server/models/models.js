const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
  title: {type: String, trim: true, required: [true, 'A title is required'],minlength: [3, 'A title\'s length must at least be 3 characters'], unique: true},
  description: {type: String, trim: true, default: ''},
  completed: {type: Boolean, required: true, default: false},}, 
  {timestamps: true});

taskSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

module.exports = mongoose.model('Task', taskSchema);