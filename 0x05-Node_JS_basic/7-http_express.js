const express = require('express');
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
    return this.total || 0;
  }

  getStudents() {
    return this.students;
  }

  getNameDep() {
    return this.nameDep;
  }

  static initTotal() {
    this.total = 0;
  }
}

function search(nameDep, listDep) {
  let objDepartment = listDep.find((dep) => dep.getNameDep() === nameDep);
  if (!objDepartment) {
    objDepartment = new Department(nameDep);
    listDep.push(objDepartment);
  }
  return objDepartment;
}
const countStudents = (path) => new Promise((resolve, reject) => {
  const output = [];
  const listDep = [];
  Department.initTotal();
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.split('\n');
      for (const line of lines) {
        if (!(line.trim() === '' || line.includes('firstname,lastname,age,field'))) {
          const infoStd = line.split(',');
          const objDep = search(infoStd[3], listDep);
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

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  const [, , path = ''] = process.argv;
  countStudents(path)
    .then((output) => {
      output.unshift('This is the list of our students');
      res.send(output.join('\n'));
    })
    .catch(() => {
      const msg = 'This is the list of our students\nCannot load the database';
      res.statusCode = 404;
      res.send(msg);
    });
});

app.listen(1245, () => {
  console.log('...');
});
module.exports = app;
