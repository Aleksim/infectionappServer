const mongoose = require('mongoose')

const sicksSchema = new mongoose.Schema({
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        altitudeAccuracy: Number,
        accuracy: Number,
        heading: Number,
        speed: Number
    },
    timestamp: Number
})

mongoose.model('Sicks', sicksSchema)