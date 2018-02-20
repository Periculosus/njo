// var express = require('express');
// var app = express();
//
// app.get('/', function(req, res) {
//     res.send('hello world');
// });
//
// app.get('/david', function(req, res) {
//     res.send('hello david');
// });
//
// app.listen(3000);

var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/photo');
app.use(express.static(staticPath));

app.listen(3000, function() {
    console.log('listening');
});