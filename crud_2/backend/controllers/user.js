const User = require('../models/User');

const handleGetAllUser = async(req, res) =>{
  const users = await User.find({})
    res.json(users);
}

const handleCreateNewUser = async(req, res) =>{
   try{
    const newUser  = new User(req.body)
     await newUser.save();
     res.json(newUser);
   }catch(error){
    res.status(500).json({error: error.message})
   }
}
const handleUpdateUser = async(req, res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id , req.body  ,{new: true})
        res.json(user);
    }catch{
        res.status(500).json({error: message})
    }
}
const handleDeleteUser = async(req , res) =>{
    try{
       await User.findByIdAndDelete(req.params.id);
       res.json({message: "User Deleted"})
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

module.exports ={
    handleGetAllUser,
    handleCreateNewUser,
    handleUpdateUser,
    handleDeleteUser

}
