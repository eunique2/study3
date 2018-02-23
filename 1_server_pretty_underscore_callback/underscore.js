const _ = require('underscore');
var arr = [3,6,9,1,12];
console.log(arr[0]);
console.log(_.first(arr));

console.log(arr[arr.length-1]);
console.log(_.last(arr));


console.log(arr.sort(function(a,b){console.log('c',a,b); return a-b;}));

console.log(arr.sort());
