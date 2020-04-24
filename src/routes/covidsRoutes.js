const express = require('express')
const mongoose= require('mongoose')

const Covids = mongoose.model('Covids')

// new router object:
const router = express.Router()


router.post('/covids', async(req,res)=>{
    const{timestamp, coords} = req.body

    if(!timestamp || !coords ){
        return res
        .status(422)
        .send({error: "you must provide timestamp and coords"})
    }
    try{
        const covids = new Covids({timestamp, coords})
        await covids.save();
        res.send(covids)
    }catch (err) {
        res.status(422).send({error: err.message})
    }
})

module.exports = router;