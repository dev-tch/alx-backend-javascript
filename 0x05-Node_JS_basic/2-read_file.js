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

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    for (const line of lines) {
      if (!(line.trim() === '' || line.includes('firstname,lastname,age,field'))) {
        const infoStd = line.split(',');
        const objDep = search(infoStd[3]);
        objDep.append(infoStd[0]);
      }
    }
    console.log(`Number of students: ${Department.getTotal()}`);
    for (const depObj of listDep) {
      const students = depObj.getStudents();
      console.log(`Number of students in ${depObj.getNameDep()}: ${students.length}. List: ${Array.prototype.join.call(students, ', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
