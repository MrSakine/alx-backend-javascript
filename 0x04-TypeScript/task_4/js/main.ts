/// <reference path="Subject.ts" />

import { Subjects } from './js/Subject';
export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();
eport const teacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
};

cpp.teacher = teacher;
console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.teacher = teacher;
console.log("Java");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

react.teacher = teacher;
console.log("React");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
