const express = require('express')
const mongoose= require('mongoose')



const Position = mongoose.model('Position')

// new router object:
const router = express.Router()

router.get('/positions', async(req,res)=>{
     const positions = await Position.find()

     res.send(positions)
});


//post requestit

router.post('/positions', async(req,res)=>{
    const{timestamp, coords} = req.body

    if(!timestamp || !coords ){
        return res
        .status(422)
        .send({error: "you must provide timestamp and coords"})
    }
    try{
        const position = new Position({timestamp, coords})
        await position.save();
        res.send(position)
    }catch (err) {
        res.status(422).send({error: err.message})
    }
})



// router.post('/covids', async(req,res)=>{
//     const{timestamp, coords} = req.body

//     if(!timestamp || !coords ){
//         return res
//         .status(422)
//         .send({error: "you must provide timestamp and coords"})
//     }
//     try{
//         const covids = new Position({timestamp, coords})
//         await covids.save();
//         res.send(covids)
//     }catch (err) {
//         res.status(422).send({error: err.message})
//     }
// })

// router.post('/recovereds', async(req,res)=>{
//     const{timestamp, coords} = req.body

//     if(!timestamp || !coords ){
//         return res
//         .status(422)
//         .send({error: "you must provide timestamp and coords"})
//     }
//     try{
//         const recovereds = new Position({timestamp, coords})
//         await recovereds.save();
//         res.send(recovereds)
//     }catch (err) {
//         res.status(422).send({error: err.message})
//     }
// })

// router.post('/tracks', async(req,res)=>{
//     const{timestamp, coords} = req.body

//     if(!timestamp || !coords ){
//         return res
//         .status(422)
//         .send({error: "you must provide timestamp and coords"})
//     }
//     try{
//         const tracks = new Position({timestamp, coords})
//         await tracks.save();
//         res.send(tracks)
//     }catch (err) {
//         res.status(422).send({error: err.message})
//     }
// })


module.exports = router;