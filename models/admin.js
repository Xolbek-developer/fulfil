const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  about: {
    type: String,
  },
  profession: {
    type: String,
  },
});

module.exports = mongoose.model("Admin", adminSchema);
