export default function getStudentIdsSum(array) {
  return array.reduce((initial, current) => initial + current.id, 0);
}
