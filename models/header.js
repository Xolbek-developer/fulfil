const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const headerSchema = new Schema({
  students: { type: String, required: true },
  lessons: { type: String, required: true },
  teachers: { type: String, required: true },
  groups: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = mongoose.model("Header", headerSchema);
