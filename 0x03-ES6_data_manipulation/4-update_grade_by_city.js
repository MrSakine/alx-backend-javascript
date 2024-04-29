export default function updateStudentGradeByCity(array, city, newGrades) {
  const filteredStudents = array.filter((el) => el.location === city);
  return filteredStudents.map((el) => {
    const grade = newGrades.filter((grade) => grade.studentId === el.id);
    return {
      id: el.id,
      firstName: el.firstName,
      location: el.location,
      grade: grade[0] === undefined ? 'N/A' : grade[0].grade,
    };
  });
}
