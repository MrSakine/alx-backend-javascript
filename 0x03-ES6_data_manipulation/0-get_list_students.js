export default function getListStudents() {
  const firstNames = ['Guillaume', 'James', 'Serena'];
  const locations = ['San Francisco', 'Columbia', 'San Francisco'];
  const ids = [1, 2, 5];
  const students = Array.of();
  for (let id = 0; id < 3; id += 1) {
    const obj = { id: ids[id], firstName: firstNames[id], location: locations[id] };
    students.push(obj);
  }
  return students;
}
