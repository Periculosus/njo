const http = require('http');
// var fs = require('fs');

const hostname = '192.168.88.48';
const port = 3000;

//
const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/text');
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>node server is running</h1>");
    // res.end('\n\thello \n\ti love you \n\twant you to tell me your name');
    res.end('<br>hello <br>i love you <br>want you to tell me your name');
});

server.listen(port, hostname, function() {
    console.log("Server running");
});

// http.createServer(function(req, res){
//     fs.readFile('index.html',function (err, data){
//         res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
//         res.write(data);
//         res.end();
//     });
// }).listen(8000);