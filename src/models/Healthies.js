const mongoose = require('mongoose')

const healthiesSchema = new mongoose.Schema({
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

healthiesArraySchema = new mongoose.Schema({
    locations: [healthiesSchema]
})

mongoose.model('Healthies', healthiesArraySchema)