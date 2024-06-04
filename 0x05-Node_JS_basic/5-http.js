const { createServer } = require('http');
const fs = require('fs');

class Department {
  constructor(nameDep) {
    this.nameDep = nameDep;
    this.students = [];
  }

  append(nameSudent) {
    if (this.students.includes(nameSudent)) {
      return;
    }
    this.students.push(nameSudent);
    Department.updateTotal();
  }

  static updateTotal() {
    if (this.total === undefined) {
      this.total = 0;
    }
    this.total += 1;
  }

  static getTotal() {
    if (this.total === undefined) {
      this.total = 0;
    }
    return this.total;
  }

  getStudents() {
    return this.students;
  }

  getNameDep() {
    return this.nameDep;
  }

  isNameDepEquals(nameDep) {
    if (this.nameDep === nameDep) {
      return true;
    }
    return false;
  }
}

const listDep = [];
const output = [];
function search(nameDep) {
  for (const obj of listDep) {
    if (obj.isNameDepEquals(nameDep)) {
      return obj;
    }
  }
  const obj = new Department(nameDep);
  listDep.push(obj);
  return obj;
}
const path = (process.argv.length === 3) ? process.argv[2] : '';
const countStudents = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const lines = data.split('\n');
      for (const line of lines) {
        if (!(line.trim() === '' || line.includes('firstname,lastname,age,field'))) {
          const infoStd = line.split(',');
          const objDep = search(infoStd[3]);
          objDep.append(infoStd[0]);
        }
      }
      output.push(`Number of students: ${Department.getTotal()}`);
      for (const depObj of listDep) {
        const students = depObj.getStudents();
        output.push(`Number of students in ${depObj.getNameDep()}: ${students.length}. List: ${Array.prototype.join.call(students, ', ')}`);
      }
      resolve(output);
    }
  });
});

const hostname = 'localhost';
const port = 1245;
const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;
    case '/students':
      countStudents(path)
        .then((output) => {
          output.splice(0, 0, 'This is the list of our students');
          res.end(output.join('\n'));
        })
        .catch(() => {
          res.statusCode = 404;
          res.end('Cannot load the database');
        });
      break;
    default:
      res.statusCode = 404;
      res.end('Cannot load the database');
  }
});
app.listen(port, hostname, () => {
  console.log('...');
});
module.exports = app;
