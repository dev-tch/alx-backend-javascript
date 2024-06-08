import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    const students = {};

    // Test access file path
    fs.access(filePath, fs.constants.R_OK, (err) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Read file contents
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
          return;
        }

        const lines = data.split('\n');

        // Parse CSV header
        const header = lines[0].split(',');
        const fieldIndex = header.indexOf('field');
        const firstNameIndex = header.indexOf('firstname');

        if (fieldIndex === -1 || firstNameIndex === -1) {
          reject(new Error('Invalid database format'));
          return;
        }

        // Parse each row
        lines.slice(1).forEach((line) => {
          const values = line.split(',');

          if (values.length === header.length) {
            const field = values[fieldIndex];
            const firstName = values[firstNameIndex];

            if (!students[field]) {
              students[field] = [];
            }

            students[field].push(firstName);
          }
        });

        resolve(students);
      });
    });
  });
}
