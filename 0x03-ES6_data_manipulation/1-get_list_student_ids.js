export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return Array.of();
  }
  return array.map((el) => el.id);
}
