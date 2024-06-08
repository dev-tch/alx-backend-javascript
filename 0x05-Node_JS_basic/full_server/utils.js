import fs from 'fs';
import csvParser from 'csv-parser';

export  function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    const students = {};
    // test acces file path 
    fs.access(filePath, fs.constants.R_OK, (err) => {
      if (err) {
        console.log("go")
          reject(new Error('Cannot load the database'));
          return;
      }
    });
    fs.createReadStream(filePath)
    .on('error', () => {
      reject(new Error('Cannot load the database'));
      return;
    })

    .pipe(csvParser())
    .on('data', (row) => {
      if (Object.keys(row).length > 0) {
        const field = row.field;
        if (!students[field]) {
            students[field] = [];
        }
        students[field].push(row.firstname);
      }
    })

    .on('end', () => {
      resolve(students);
      return;
    })

  });
};

