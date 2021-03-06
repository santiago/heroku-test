var express = require('express');
var app = express();
app.use(express.static(__dirname + '/client/mobile-detect-demo/app'));

app.set('port', (process.env.PORT || 5000));

// respond with "hello world" when a GET request is made to the homepage
/*app.get('/', function(req, res) {
  res.send('hello world');
});*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
