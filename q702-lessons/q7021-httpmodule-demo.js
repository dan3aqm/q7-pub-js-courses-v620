var http = require('http');


console.log("starting..")

//create an http server 
http.createServer((req, res)=> {
    console.log("request is:" + req);

    res.write("greetings!!!");
    res.end();

}).listen(9090);


console.log("finished..")
