const express = require('express')
const mongoose= require('mongoose')

const Sicks = mongoose.model('Sicks')

// new router object:
const router = express.Router()


router.post('/sicks', async(req,res)=>{
    const{timestamp, coords} = req.body

    if(!timestamp || !coords ){
        return res
        .status(422)
        .send({error: "you must provide timestamp and coords"})
    }
    try{
        const sicks = new Sicks({timestamp, coords})
        await sicks.save();
        res.send(sicks)
    }catch (err) {
        res.status(422).send({error: err.message})
    }
})

module.exports = router;