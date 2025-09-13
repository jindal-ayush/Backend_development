const fs = require('node:fs');

console.log("start of script");

//Blocking operation
// const ouptut = fs.readFileSync('notes.txt' , 'utf-8');
// console.log('output',ouptut);

//non bloking operation
fs.readFile('notes.txt', 'utf-8' , function(err, data){
      if(err){
        console.log(err);
      }
      else{
        console.log("data", data)
      }
})
console.log("end pf the script");

// fs.writeFileSync("notes.txt", "Ayush");
// fs.appendFileSync("notes.txt", " Jindal")