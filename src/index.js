require ('./models/Position')
require('dotenv').config()


const express = require('express')
//käytetään mongoosea konnektaamaan mongoon
const mongoose = require('mongoose')
//bodyparser is little helper library that will automatically parse
//information associated with the body property of incoming request
//so we use bodyparser to automatically handle the incoming json 
//information
const bodyParser = require('body-parser')

const authRoutes = require('./routes/authRoutes')


const positionRoutes = require('./routes/positionRoutes')


const app = express()

//to handle the incoming json do this:
app.use(bodyParser.json())


//to use the router(this essentially associates all the request 
//handlers, we added to the router, with our main express application):
app.use(authRoutes)

app.use(positionRoutes)

//connection string ja lisäsin salasanan siihen. We can use this mongo
//uri to connect to our mongo instance.
const mongoUri=process.env.MONGODB_URI
mongoose.connect(mongoUri,{
    //these are not so interesting and used just to prevent some common
    //error messages from appearing inside the terminal.
    useNewUrlParser: true,
    useCreateIndex: true
})

//to make sure we successfully connect to our mongo instance and
//detect any errors as we are connecting. When we connect successfully
//the console.log will be run:
mongoose.connection.on('connected', () => {
    console.log('connected to mongo instance')
})
//error will be received with some error object/argument, so i'll 
//receive it and use it.
mongoose.connection.on('error', (err) => {
    console.log('Error connecting to mongo', err)
})

app.get('/', (req, res)=>{
    res.send('hi there')
})

//to make this work, we have to make our app object listen to a certain 
//port on our local machine.
app.listen(3000, () => {
    console.log('listening on port 3000')
})