// utils/db.js
const mongoose = require('mongoose');
require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected ${mongoose.connection.host}`.bgCyan.blue);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    // process.exit(1);
  }
};

module.exports = connectDB;
