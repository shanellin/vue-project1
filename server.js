var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var history = require('connect-history-api-fallback');

var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

app.use(express.static('dist'));
app.use(history({ verbose: true, index: '/' }));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

// server
var server = app.listen(process.env.PORT || 5000, (req, res) => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('server is running .  http://%s:%s', host, port);
});

// var port = process.env.PORT || 5000
// app.listen(port)
