const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  name: { type: String, required: true },
  course: { type: String, required: true },
  imageUrl: { type: String, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
