const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fname: String,
  lname: String,
  age: Number,
  email: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});


const contactModel = mongoose.model("contact", UserSchema);
module.exports = contactModel;
