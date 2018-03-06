var express = require('express');
var app = express();
// 문장을 가독성있게 만들기.
app.locals.pretty = true;

app.set('view engine', 'pug');
app.set('views', '4_template-jade/views')
app.use(express.static('4_template-jade/public'));

// routing
app.get('/', function(req, res) {
  res.send('hello!!');
});

app.get('/topic', function(req, res) {
  console.log('===============Request Info Start================');
  console.log(Date()); // '/admin/new'
  console.log('Host : ',req.hostname);
  console.log('IP : ',req.ip);
  console.log('Req Url',req.originalUrl);
  console.log('Value : ',JSON.stringify(req.query));
  console.log('===============Request Info End================');
  var topics =[
    'JavaScript is...',
    'Nodejs is...',
    'Express is...'
  ]
  var output =`
    <a href="/topic?id=0">JacaScript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br>
    ${topics[req.query.id]}
  `;
  res.render('topic',{name:topics[req.query.id]});
  // res.send(output);
  // res.send(req.query.id);

})

app.get('/login', function(req, res) {

})

app.get('/template', function(req, res) {
  res.render('temp', {
    time: Date(),
    name: 'Woon-ji'
  });
});

// web server init
app.listen(3001, function() {
  console.log('express server is started!!!');
});
