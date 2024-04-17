const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  tech: {
    type: [String],
    required: true,
  },
  deploy: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
