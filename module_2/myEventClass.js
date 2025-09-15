const EventEmitter = require("events")

class Chat extends EventEmitter{
   sendMessage(msg){
     console.log(`message send :${msg}`)
     this.emit('messageRecived', msg)
   }
}
const chat = new Chat();
chat.on('messageRecived', (msg)=>{
    console.log('msg')
})

chat.sendMessage('hello hitesh')