const {books} = require('../db/book')
exports.getAllBooks = function(req, res){
       res.json(books);
}
exports.getBookById = function(req, res){
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
}

exports.createBook = function(req,res){
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
}

exports.deleteBookById =  function(req,res){
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

}