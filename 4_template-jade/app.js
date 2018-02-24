var express = require('express');
var app = express();
 app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', '4_template-jade/views')
app.use(express.static('4_template-jade/public'));

app.get('/', function(req, res) {
  res.send('hello!!');
});

app.get('/template',function(req,res){
  res.render('temp',{time: Date(),name:'Woon-ji'});
});

app.listen(3000, function() {
  console.log('express server is started!!!');
});
