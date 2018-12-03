const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const LocationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longtitude: {
    type: Number,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  streetAddress: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true
  }
});

module.exports = Location = mongoose.model('locations', LocationSchema);
