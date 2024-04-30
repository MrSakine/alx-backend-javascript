interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const john: Student = {
  firstName: 'Paul',
  lastName: 'Jerry',
  age: 27,
  location: 'Nigeria'
};
const doe: Student = {
  firstName: 'Jerry',
  lastName: 'Parkerson',
  age: 28,
  location: 'Edo state'
};
const studentList: Array<Student> = [john, doe];
const body: HTMLBodyElement = document.querySelector("body") as HTMLBodyElement;
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');

th1.innerText = 'First Name';
th2.innerText = 'Location';
th1.style.border = '1px solid #000';
th2.style.border = '1px solid #000';
th1.style.padding = '20px';
th2.style.padding = '20px';
table.style.border = '1px solid #000';
table.style.borderCollapse = 'collapse';

thead.append(th1);
thead.append(th2);
table.append(thead);

studentList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const column1: HTMLTableCellElement = document.createElement('td');
  const column2: HTMLTableCellElement = document.createElement('td');

  column1.innerText = student.firstName;
  column2.innerText = student.lastName;
  column1.style.border = '1px solid gray';
  column2.style.border = '1px solid gray';
  column1.style.padding = '.5rem';
  column2.style.padding = '.5rem';
  row.append(column1);
  row.append(column2)
  table.append(row);
});
body.append(table);
