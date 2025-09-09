const express = require("express");
const User = require('../models/User');
const router = express.Router();

router.post("/" , async(req, res)=>{
   try{
    const user = new User(req.body);
    await user.save();
    res.json(user);
   }catch(err){
    res.status(500).json({error: err.message});
   }
})

router.get('/', async(req, res)=>{
    const users  =  await User.find();
    res.json(users);
});

router.put('/:id', async(req, res)=>{
    try{
    const user =  await User.findByIdAndUpdate(req.params.id , req.body , {new: true})
    res.json(user);
    }
    catch(err){
      res.status(500).json({error: message});
    }
})

router.delete('/:id',async(req, res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.json({message: "user Deleted"});
    }catch(err){
        res.status(500).json({error: err.message})
    }
} )

module.exports =  router;
