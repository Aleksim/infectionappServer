const express = require('express')
const mongoose= require('mongoose')

const Sicks = mongoose.model('Sicks')

// new router object:
const router = express.Router()

router.get('/sicks', async(req, res)=>{
    const sicks = await Sicks.find()
    res.send(sicks)
})


router.post('/sicks', async(req,res)=>{
    const{locations} = req.body

    if(!locations){
        return res
        .status(422)
        .send({error: "you must provide timestamp and coords"})
    }
    try{
        const sicks = new Sicks({locations})
        await sicks.save();
        res.send(sicks)
    }catch (err) {
        res.status(422).send({error: err.message})
    }
})

module.exports = router;