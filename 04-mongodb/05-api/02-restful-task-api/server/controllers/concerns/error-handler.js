module.exports = function(error) {
    let errors = [];
  
    if (error.errors) {
      errors = Object.keys(error.errors)
                  .map(field => error.errors[field].message);
    } else if (typeof error === 'string') {
      errors.push(error);
    } else if (error.message) {
      errors.push(error.message);
    } else {
      errors.push('OOPS! An error has occured');
    }
  
    this.status(422).json(errors);
  };