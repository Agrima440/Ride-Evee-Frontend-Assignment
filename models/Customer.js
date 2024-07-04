// models/Customer.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
  altPhone: String,
  registeredOn: { type: Date, default: Date.now },
  status: { type: String, default: 'Active' },
  bookingHistory: String,
});

module.exports = mongoose.model('Customer', customerSchema);
