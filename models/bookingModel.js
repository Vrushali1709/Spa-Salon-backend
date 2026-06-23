const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    date: String,
    time: String,
    package: String,
    price: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);