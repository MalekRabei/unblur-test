var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

const BookingSchema = new Schema(
  {
    fullName: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    hotelName: {
      type: String,
      required: true,
    },
    roomType: {
      type: String,
      required: false,
    },

    bookingState: {
      type: Boolean,
      default: false,
      required: true,
    },
    duration: {
      startDate: {
        type: Date,
        default: Date.now,
        required: false,
      },
      endDate: {
        type: Date,
        default: Date.now,
        required: false,
      },
    },
  },
  {
    versionkey: false,
    timestamps: true,
  },
);

module.exports = mongoose.model('Booking', BookingSchema);
