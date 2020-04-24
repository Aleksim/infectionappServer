const express = require('express')
const mongoose= require('mongoose')

const Recovereds = mongoose.model('Recovereds')

// new router object:
const router = express.Router()


router.post('/recovereds', async(req,res)=>{
    const{timestamp, coords} = req.body

    if(!timestamp || !coords ){
        return res
        .status(422)
        .send({error: "you must provide timestamp and coords"})
    }
    try{
        const recovereds = new Recovereds({timestamp, coords})
        await recovereds.save();
        res.send(recovereds)
    }catch (err) {
        res.status(422).send({error: err.message})
    }
})

module.exports = router;