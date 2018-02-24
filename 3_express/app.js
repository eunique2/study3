const express = require('express');
const app = express();

app.use(express.static('3_express/public'));

app.get('/',function(req,res){
  res.send('hello!!');
});

app.get('/logo',function(req,res){
  res.send('<img src="/logo70th.gif"/>');
});

app.get('/login',function(req,res){
  res.send('Login please..');
});

app.listen(3000,function(){
  console.log('express server is started!!!');
});
