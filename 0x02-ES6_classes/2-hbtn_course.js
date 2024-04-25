export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // eslint-disable-next-line no-underscore-dangle
  get name() { return this._name; }

  // eslint-disable-next-line no-underscore-dangle
  get length() { return this._length; }

  // eslint-disable-next-line no-underscore-dangle
  get students() { return this._students; }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._length = length;
  }

  set students(students) {
    if (!students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._students = students;
  }
}
