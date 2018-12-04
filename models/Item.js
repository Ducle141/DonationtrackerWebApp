const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  location: {
    // type: Schema.Types.ObjectId,
    // ref: 'locations'
    type: String,
    required: true
  },
  category: {
    // type: Schema.Types.ObjectId,
    // ref: 'categories'
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('items', ItemSchema);
