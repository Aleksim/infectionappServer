//first require the express library
const express = require('express')

//to access our userModel & manipulate our collection of users:
const mongoose = require('mongoose')

//then use express to create a router. Router is a little object that
//allows us to associate some number of rep handlers with it. We can
//then take that router and associate it back with our app object that
//we had created inside index.js
const router = express.Router()

//post request joka laukeaa aina kun käyttää siihen tätä end ponttia.
router.post('/testi', (req, res)=>{
    res.send('you made a post request')
})

//to make sure ou router is used by our application, lets export
//it.
module.exports = router