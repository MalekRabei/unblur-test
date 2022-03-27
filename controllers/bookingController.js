var exports = (module.exports = {});

// Call Post model
let Booking = require('../models/booking.model');

//validation
const { check, validationResult, body } = require('express-validator');

// get list
exports.bookingList = function (req, res) {
  Booking.find(function (err, bookings) {
    if (err) return next(err);
    res.json(bookings);
    console.log(bookings);
  });
};

// add a reservation
exports.addBooking = function (req, res) {
  console.log(req.body);

  let newBooking = new Booking({
    fullName: req.body.fullName,
    phoneNumber: req.body.phoneNumber,
    hotelName: req.body.hotelName,
    roomType: req.body.roomType,
    bookingState: req.body.state,
    startDate: req.body.startDate,
    endStart: req.body.endDate,
  });
  console.log('book', newBooking);
  /*if (Booking.findOne({ startDate: { $gte: newBooking.endDate, $lte } })) {*/
  newBooking.save(function (err) {
    if (err) {
      return res.json({
        success: false,
        msg: err + 'Booking creation failed.',
      });
    }
    return res.json({
      success: true,
      msg: ' New booking created successfully.',
    });
  });
  /*} else {
    return res.json({ success: false, msg: 'Already booked' });
  }*/
};

//validate add
//validate update
exports.validate = (method) => {
  switch (method) {
    case 'input': {
      return [
        body('hotelName', 'Please enter the hotel name').isLength({ min: 3 }),
        body('state', 'Please enter the state').isLength({ min: 1 }),
        body('startDate', 'Please enter the start date').isLength({ min: 1 }),
        body('endDate', 'Please enter the end date').isLength({ min: 1 }),
      ];
    }
  }
};
