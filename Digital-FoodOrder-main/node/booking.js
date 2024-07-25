
//const mongoose = require('mongoose')

// Define schema for bookings
const bookingSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    adults: {
        type: Number,
        required: true,
        min: 1
    },
    children: {
        type: Number,
        required: true,
        min: 0
    },
    rooms: {
        type: Number,
        required: true,
        min: 1
    }
})

// Creating model from schema
const Booking = mongoose.model('Booking', bookingSchema)

// Exporting model
module.exports = Booking