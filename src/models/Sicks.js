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

sicksArraySchema = new mongoose.Schema({
    locations: [sicksSchema]
})

mongoose.model('Sicks', sicksArraySchema)
