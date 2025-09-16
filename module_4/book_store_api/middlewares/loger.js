const fs=  require('node:fs');

exports.loggerMiddleware =  function(req, res, next){
    const log = `\n[${Date.now()}], ${req.path}, ${req.method}`;
    fs.appendFileSync('logs.txt', log, 'utf-8');
    next();
}
// app.use(function(req, res, next){
//     const log=` \n[${Date.now()}] ${req.method} ${req.path}`;
//     fs.appendFileSync('logs.txt', log, 'utf-8')
//     next();
// })
//  function customMiddleware(req,res,next){
//     console.log("i am a custom middleware")
//     next();
//  }

// app.use(function(req, res , next){
//    console.log('i am a middleware a');
// next(); 
// })

// app.use(function(req,res, next){
//     // console.log("i am a middleware b")
//    next();    
// })
