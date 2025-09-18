const express = require('express');

const app = express();

const PORT = 8000;
app.use(express.json());

const DIARY = {}
const Email =  new Set();
//suppose email is unique car number
app.post('/', (req, res)=>{
    const {name , email , password} = req.body;
    if(Email.has(email))
    {
        return res.status(500).json({error: "user email already taken"})
    }
    //create a token for user
    const token = `${Date.now()}`;

    //do not entry in dairy
    DIARY[token] = {name , email , password};
    Email.add(email);
    return res.json({status: 'success', token})
})   
app.get('me', (req, res)=>{
    const {token} =  req.body;
    
})
app.listen(PORT, ()=>{
    console.log(`server is started on Port ${PORT}`)
})