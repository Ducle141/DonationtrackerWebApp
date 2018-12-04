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

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Name field is required';
  }

  if (Validator.isEmpty(data.longDescription)) {
    errors.longDescription = 'Description field is required';
  }

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
