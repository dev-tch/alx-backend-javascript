const { createServer } = require('http');
const { spawn } = require('child_process');

const hostname = 'localhost';
const port = 1245;
const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const path = (process.argv.length === 3) ? process.argv[2] : '';
  const cmd = `(async () => {const countStudents = require('./3-read_file_async');try {await countStudents('${path}');} catch (error) {console.error(error);}})();`;
  let child = '';
  let receivedData = '';
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;
    case '/students':
      child = spawn('node', ['-e', `${cmd}`]);
      child.stdout.on('data', (data) => {
        receivedData += data.toString();
      });
      child.stderr.on('data', (data) => {
        receivedData += data.toString();
      });
      child.on('close', () => {
        res.end(`This is the list of our students\n'${receivedData.trim()}`);
      });
      break;
    default:
      res.statusCode = 404;
      res.end('Not Found');
      break;
  }
});
app.listen(port, hostname, () => {
  console.log('...');
});
module.exports = app;
