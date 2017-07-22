var express = require('express');
var os = require('os');

var app = express();

app.get('/', (req, res) => {
  var hostDetails = {
    "ipaddress": req.ip,
    "Software": os.arch() + " " + os.type(),
  }
  res.json(hostDetails);
});

app.listen(3000, '127.0.0.1', () => {
  console.log("Server listening for requests...");
});