var express = require('express');
var os = require('os');
var parser = require('ua-parser-js');

var app = express();

app.get('/', (req, res) => {
  var osName = parser(req.get('user-agent')).os.name;
  var osVersion = parser(req.get('user-agent')).os.version;
  var hostDetails = {
    "ipaddress": req.ip,
    "Software": osVersion + ' ' + osName,
    "language": req.get('accept-language').split(',')[0],
  }
  res.json(hostDetails);
});

app.listen(3000, '127.0.0.1', () => {
  console.log("Server listening for requests...");
});