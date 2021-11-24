const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const enrollSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  course: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Enroll", enrollSchema);
