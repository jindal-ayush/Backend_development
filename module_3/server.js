const http = require('node:http');

const server = http.createServer(function(req,res){
    console.log(`incoming request at [${Date.now()}]`)
    console.log(req.method)
    console.log(req.headers);
//     console.log('i got incoming request')
  res.writeHead(200);
  res.end(`you can accept ${req.headers['accep-language']}`);

});

server.listen(8000, function(){
    console.log(`http server is up and runing on port: 8000`)
})