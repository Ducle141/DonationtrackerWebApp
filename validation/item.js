const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateItemInput(data) {
  let errors = {};

  data.description = !isEmpty(data.description) ? data.description : '';
  data.longDescription = !isEmpty(data.longDescription)
    ? data.longDescription
    : '';
  data.category = !isEmpty(data.category) ? data.category : '';
  data.value = !isEmpty(data.value) ? data.value : '';
  data.location = !isEmpty(data.location) ? data.location : '';

  // if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
  //   errors.name = 'Name must be between 2 and 30 characters';
  // }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Name field is required';
  }

  if (Validator.isEmpty(data.longDescription)) {
    errors.longDescription = 'Description field is required';
  }

  // if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
  //   errors.password = 'Password must be at least 6 characters';
  // }

  if (Validator.isEmpty(data.category)) {
    errors.category = 'Category field is required';
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = 'Location field is required';
  }

  // if (Validator.isEmpty(data.value)) {
  //   errors.location = 'Value field is required';
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
