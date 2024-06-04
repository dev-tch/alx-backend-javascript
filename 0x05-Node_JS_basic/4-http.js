const { createServer } = require('http');

const hostname = 'localhost';
const port = 1245;
const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});
app.listen(port, hostname, () => {
  console.log('...');
});
module.exports = app;
