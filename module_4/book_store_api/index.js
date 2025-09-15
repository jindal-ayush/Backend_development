const express = require('express');
const fs=  require('node:fs');

const app = express();
const PORT = 8000;
app.use(express.json());

app.use(function(req, res , next){
  console.log('i am a middleware a');
next(); 
})
app.use(function(req, res, next){
    const log=` [${Date.now()}] ${req.method} ${req.path}`;
    fs.appendFileSync('logs.txt', log, 'utf-8')
    next();
})
app.use(function(req,res){
    console.log("i am a middleware b")
    res.send({message: "second"})
    
})

const books  =[
    {id: 1 , title: 'Book One', author: 'Author One'},
    {id: 2 , title: 'Book Two', author: 'Author Two'},
]
app.get('/books', (req, res)=>{
    // res.setHeader('x-piy', 'piyush garg')
   res.json(books);
})

app.get('/books/:id', (req, res)=>{
   const id = parseInt(req.params.id);
   const book = books.find((e)=>e.id ===id)
   if(isNaN(id))
   {
    return res.status(400).json({error: "bad request"})
   }
   if(!book)
   {
    return res.status(404).json({error:`book with id ${id} does not exist`});

   }
   return res.json(book);
})
app.post('/books', (req, res)=>{
    const {title , author} =  req.body;

   if(!title || title === '')
   {
    return res.status(400).json({error: 'title is required'});
   }
   if(!author || author ==='')
   {
    return res.status(400).json({error: 'author is required'})
   }
   const id = books.length+1;
   const book ={id , title, author};
   books.push(book);
   return res.status(201).json({message: "book is created sucessfully", id});
})
app.delete('/books/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    if(isNaN(id))
    {
        return res.status(400).json({error: "id must be type a number"});
    }
    const indexToDelete = books.findIndex((e)=>e.id ===id);
    if(indexToDelete<0)
        return res.status(404).json({error:`book with id ${id} does not exist!`});
    books.splice(indexToDelete , 1);
    return res.status(200).json({message: 'book deleted'})
})
app.listen(PORT, ()=>{
    console.log(`port is runing on ${PORT}`)
})