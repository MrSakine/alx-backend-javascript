const http = require('http');
const url = require('url');
const fs = require('fs').promises;

const DATABASE = process.argv[2];

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    let output = 'This is the list of our students\n';

    fs.readFile(DATABASE, 'utf8')
      .then((data) => {
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
        res.end(output.trim());
      })
      .catch(() => {
        res.statusCode = 500;
        output += 'Cannot load the database\n';
        res.end(output.trim());
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
