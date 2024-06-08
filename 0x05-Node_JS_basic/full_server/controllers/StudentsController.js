import { readDatabase } from '../utils.js';
export default class StudentsController {
  static getAllStudents(req, res) {
    console.log(process.argv[2])
    readDatabase(process.argv[2])
      .then((data) => {
        const students = data
            let msg = 'This is the list of our students\n';
            for (const field of Object.keys(students).sort()) {
                const studentList = students[field];
                msg += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
            }
            res.status(200).send(msg.trim());
      } )
      .catch((err) => {
        console.log(err)
        res.status(500).send('Cannot load the database');
      })
  }
  static getAllStudentsByMajor(req, res) {
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
    }
    readDatabase(process.argv[2])
    .then((data) => {
      const students = data
      const studentList = students[major] || [];
      res.status(200).send(`List: ${studentList.join(', ')}`);
    } )
    .catch((err) => {
      res.status(500).send('Cannot load the database');
    })
  }
}

