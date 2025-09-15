const express=  require('express');

const app = express();
const PORT = 3000;
app.get('/', (req, res)=>{
    res.send("get request")
})

app.post('/tweets',(req,res)=>{
    res.status(201).send("post request")
})
app.get('/contact-us', (req,res)=>{
    res.send("get contact request")
})

app.listen(PORT, ()=>{
    console.log(`port is running on ${PORT}`);
})