/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

cpp.teacher = cTeacher;
console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.teacher = cTeacher;
console.log("Java");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

react.teacher = cTeacher;
console.log("React");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
