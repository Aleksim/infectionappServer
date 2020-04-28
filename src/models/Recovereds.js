const mongoose = require('mongoose')

const recoveredsSchema = new mongoose.Schema({
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

recoveredsArraySchema = new mongoose.Schema({
    locations: [recoveredsSchema]
})

mongoose.model('Recovereds', recoveredsArraySchema)
