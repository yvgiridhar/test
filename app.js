var express = require('express');
var app = express();
var exports = module.exports = {};

app.get('/', function(req, res){
  res.send('Hello World');
});

var server = app.listen(3000, function(){
  console.log('Magic iis happefing on port 3000');
});

exports.closeServer = function(){
 server.close();
};
