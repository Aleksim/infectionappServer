const express = require('express')
const mongoose= require('mongoose')


const Position = mongoose.model('Position')

// new router object:
const router = express.Router()

router.get('/positions', async(req,res)=>{
     const positions = await Position.find()

     res.send(positions)
});

router.post('/positions', async(req,res)=>{
    const{timestamp, coords} = req.body

    const position = new Position({timestamp, coords})
    await position.save();
}
)

//     if(!currentLocation){
//         res.status(422).send({error: 'you must provide locations'})
//     }

//     try{
//     const position = new Position({currentLocation})
//     await position.save();
//     res.send(position)
//     }catch(err){
//         res.status(422).send({error: err.message})
//     }
// }

module.exports = router;