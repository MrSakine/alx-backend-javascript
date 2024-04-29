export default function getStudentsByLocation(array, city) {
  return array.filter((el) => el.location === city);
}
