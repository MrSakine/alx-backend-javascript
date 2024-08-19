const express = require('express');
const fs = require('fs').promises;

const app = express();
const DATABASE = process.argv[2];

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (_, res) => {
  let output = 'This is the list of our students\n';
  try {
    const data = await fs.readFile(DATABASE, 'utf8');
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
    output += `Number of students: ${totalStudents}\n`;
    for (const [field, students] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }
  } catch (error) {
    res.status(500);
    output += 'Cannot load the database\n';
  }
  res.send(output.trim());
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
