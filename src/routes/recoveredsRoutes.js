const express = require('express')
const mongoose= require('mongoose')

const Recovereds = mongoose.model('Recovereds')

// new router object:
const router = express.Router()

router.get('/recovereds', async(req, res)=>{
    const recovereds = await Recovereds.find()
    res.send(recovereds)
})


router.post('/recovereds', async(req,res)=>{
    const{locations} = req.body

    if(!locations){
        return res
        .status(422)
        .send({error: "you must provide timestamp and coords"})
    }
    try{
        const recovereds = new Recovereds({locations})
        await recovereds.save();
        res.send(recovereds)
    }catch (err) {
        res.status(422).send({error: err.message})
    }
})

module.exports = router;