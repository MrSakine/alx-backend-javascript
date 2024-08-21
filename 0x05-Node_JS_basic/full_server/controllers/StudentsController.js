import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(_, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      let output = 'This is the list of our students\n';
      const sortedFields = Object
        .keys(students)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      for (const field of sortedFields) {
        const studentList = students[field].join(', ');
        output += `Number of students in ${field}: ${students[field].length}. List: ${studentList}\n`;
      }
      return res.status(200).send(output.trim());
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;
      if (major !== 'CS' && major !== 'SWE') {
        return res.status(500).send('Major parameter must be CS or SWE');
      }
      const students = await readDatabase(process.argv[2]);
      if (!students[major]) {
        return res.status(200).send(`No students found for the major: ${major}`);
      }
      const studentList = students[major].join(', ');
      const output = `List: ${studentList}`;
      return res.status(200).send(output);
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
