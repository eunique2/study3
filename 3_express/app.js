const express = require('express');
const app = express();

app.get('/',function(req,res){
  res.send('hello!!');
});

app.get('/login',function(req,res){
  res.send('Login please..');
});

app.listen(3000,function(){
  console.log('express server is started!!!');
});
