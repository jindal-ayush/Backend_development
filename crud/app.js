const express = require("express");
const userModel = require("./usermodel");

const app = express();

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "ayus",
    email: "ayush@gmail.com",
    userName: "ayush",
  });
  res.send(createdUser);
});
app.get("/update", async (req, res) => {
  let updateUser = await userModel.findOneAndUpdate(
    { userName: "ayush" },
    { name: "ayush jindal" },
    { new: true }
  );
  res.send(updateUser);
});

app.get('/read', async(req, res)=>{
    let user = await userModel.find();
    res.send(user);

})

app.get('/delete', async(req, res)=>{
    let deleteUser=  await userModel.findOneAndDelete({userName: "ayush"});
    res.send(deleteUser);
})

app.listen(3000);
