var express = require('express');
var app = express();
console.log("-----------------------@@@@@@@@@@@@@@@@@@@@@@@---------------");
app.get('/', function (req, res) {

	console.log("-----------------------------------------")
   res.send('Hello World....');

})

module.exports = app;
