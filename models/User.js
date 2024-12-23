const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  phone: { type: String },
  address: { type: String },
  creditCard: { type: String },
});



module.exports = mongoose.model('User', userSchema);

