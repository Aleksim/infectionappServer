const mongoose = require('mongoose')

const positionSchema = new mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number
    }
})


// const positionSchema= new mongoose.Schema({
//     currentLocation: [pointSchema]
// });

mongoose.model('Position', positionSchema)

// const mongoose = require('mongoose')

// const pointSchema = new mongoose.Schema({
//     timestamp: Number,
//     coords: {
//         latitude: Number,
//         longitude: Number,
//         altitude: Number,
//         accuracy: Number,
//         heading: Number,
//         speed: Number
//     }
// })


// const positionSchema= new mongoose.Schema({
//     currentLocation: [pointSchema]
// });

// mongoose.model('Position', positionSchema)