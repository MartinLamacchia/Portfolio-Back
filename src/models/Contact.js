const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    require: true,
  },
  timestamp: {
    type: Number,
    default: Math.floor(Date.now() / 1000),
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
