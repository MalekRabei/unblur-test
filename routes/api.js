let express = require('express'),
  router = express.Router();

let bookingController = require('../controllers/bookingController');

/**
 * (POST Method)
 * Create a new booking
 */
router.post('/booking', bookingController.addBooking);

/**
 * (GET Method)
 * get booking list
 */
router.get('/bookings', bookingController.bookingList);

module.exports = router;
