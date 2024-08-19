const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n').splice(1);
      const fields = {};
      for (const line of lines) {
        if (line.trim()) {
          const [firstname, , , field] = line.split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      }
      const totalStudents = lines.length;
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, students] of Object.entries(fields)) {
        console.log(
          `Number of students in ${field}: ${
            students.length
          }. List: ${students.join(', ')}`,
        );
      }
      resolve();
    });
  });
}

module.exports = countStudents;
