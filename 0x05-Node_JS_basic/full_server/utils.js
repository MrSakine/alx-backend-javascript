const fs = require('fs').promises;

export default async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
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
    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
