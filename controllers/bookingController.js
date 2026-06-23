const Booking = require("../models/bookingModel");

const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    res.status(201).json({
      message: "Booking created successfully",
      data: booking,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET ALL BOOKINGS
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createBooking,  getBookings  };