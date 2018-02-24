const express = require('express');
const app = express();

app.use(express.static('3_express/public'));

/**
 route
*/
app.get('/', function(req, res) {
  res.send('hello!!');
});

app.get('/dynamic', function(req, res) {
  var lis = '';
  for(var i=0; i<5; i++){

  }
  var output = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello dynamic :)
    </body>
  </html>
`;
  res.send(output);
});

app.get('/logo', function(req, res) {
  res.send('<img src="/logo70th.gif"/>');
});

app.get('/login', function(req, res) {
  res.send('Login please..');
});


app.listen(3000, function() {
  console.log('express server is started!!!');
});
