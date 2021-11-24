const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const partnerSchema = new Schema({
  logo: { type: String, required: true },
  link: { type: String, required: true },
});

module.exports = mongoose.model("Partner", partnerSchema);
