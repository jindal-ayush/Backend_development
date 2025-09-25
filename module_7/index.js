const express = require('express');

const app = express();

const PORT = 8000;
app.use(express.json());

const diary = {}
const EMAIL =  new Set();
//suppose email is unique car number

app.post('/signup', (req,res)=>{
    const {name , email , password}=  req.body;
    if(EMAIL.has(email))
    {
        return res.status(400).json({error : 'Email already taken'});
    }
    const token = `${Date.now()}`;
    diary[token]  =  {name, email , password};
    EMAIL.add(email);
    return res.json({status : 'success', token});
})  
app.post('/me', (req,res)=>{
    const {token} = req.body;
    if(!token)
    {
        return res.status(400).json({error: 'missing token' })
    }
    if(!(token in diary) )
    {
        return res.status(400).json({error: 'invalid token'})
    }
    const entry = diary[token];
    return res.json({data: entry})
})

app.listen(PORT, ()=>{
    console.log(`server is started on Port ${PORT}`)
})