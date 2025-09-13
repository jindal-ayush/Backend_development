const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');


app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
  res.render("index");
})
app.get('/read', (req, res)=>{
  res.render("read");
})

app.listen(PORT , ()=>{
  console.log(`server is running ${PORT}`);
})




















// const express = require("express");
// const userModel = require("./usermodel");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("hey");
// });

// app.get("/create", async (req, res) => {
//   let createdUser = await userModel.create({
//     name: "ayus",
//     email: "ayush@gmail.com",
//     userName: "ayush",
//   });
//   res.send(createdUser);
// });
// app.get("/update", async (req, res) => {
//   let updateUser = await userModel.findOneAndUpdate(
//     { userName: "ayush" },
//     { name: "ayush jindal" },
//     { new: true }
//   );
//   res.send(updateUser);
// });

// app.get('/read', async(req, res)=>{
//     let user = await userModel.find();
//     res.send(user);

// })

// app.get('/delete', async(req, res)=>{
//     let deleteUser=  await userModel.findOneAndDelete({userName: "ayush"});
//     res.send(deleteUser);
// })

// app.listen(3000);
