const EventEmitter = require('events');
const eventEmitter =  new EventEmitter();

eventEmitter.on("greet",(username)=>{
  console.log(`hello ${username}`)
})
eventEmitter.on("greet",(username)=>{
  console.log(`hello ${username} jindal`)
})
eventEmitter.once("notify",(name)=>{
  console.log(`hello ${name}`)
})

eventEmitter.emit("greet" , "ayush");
// eventEmitter.emit("greet" , "ayush");
// eventEmitter.emit("notify" , "jindal");
// eventEmitter.emit("notify");

// const myListener  = () =>{
//     console.log("i ma a test listener")
// };
// eventEmitter.on("test" , myListener);
// eventEmitter.emit("test");
// eventEmitter.emit("test");
// eventEmitter.removeListener("test", myListener);
// eventEmitter.emit("test");


