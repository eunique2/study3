const fs = require("fs");

console.log(1);
var data = fs.readFileSync('./sync_async/text.txt','utf-8');
console.log(data);



console.log(2);
fs.readFile('./sync_async/text.txt','utf-8', function(err,data){
  if (err) throw err;
  console.log(3);
  console.log(data);
});
console.log(4);
