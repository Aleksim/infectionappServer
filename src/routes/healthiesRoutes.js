const express = require('express')
const mongoose= require('mongoose')

const Healthies = mongoose.model('Healthies')

// new router object:
const router = express.Router()


router.post('/healthies', async(req,res)=>{
    const{locations} = req.body

    if(!locations){
        return res
        .status(422)
        .send({error: "you must provide timestamp and coords"})
    }
    try{
        const healthies = new Healthies({locations})
        await healthies.save();
        res.send(healthies)
    }catch (err) {
        res.status(422).send({error: err.message})
    }
})

module.exports = router;