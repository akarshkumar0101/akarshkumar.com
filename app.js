// Simple HTTP Server
var port = process.env.PORT || 8080;
var http = require('http');
const express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('*', (req, res) => res.redirect('/'));

app.listen(port, () => console.log('app listening on port ' + port + '.'));

