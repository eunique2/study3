const http = require('http');
//import 역활 : 이미 만들어진 라이브러리를 사용한다는 의미

const hostname = '127.0.0.1';
const port = 3000;

// 서버 만들기..
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => { // () => == function()
  console.log(`Server running at http://${hostname}:${port}/`);
});
