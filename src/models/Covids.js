const mongoose = require('mongoose')

const covidsSchema = new mongoose.Schema({
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

covidsArraySchema = new mongoose.Schema({
    locations: [covidsSchema]
})

mongoose.model('Covids', covidsArraySchema)