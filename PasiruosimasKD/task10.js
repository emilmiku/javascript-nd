/* ## 10. Sort by criteria
Given:
```js
const employees = [
  { name: "Jonas", department: "IT", salary: 2000 },
  { name: "Ona", department: "HR", salary: 1800 },
  { name: "Petras", department: "IT", salary: 2200 },
  { name: "Greta", department: "HR", salary: 2100 }
];
```
Write functions to Sort:

1. Employees by `department` **alphabetically**.
2. Employees by `salary` **descending**.

Return the sorted arrays. */
"use strict";
const employees = [
  { name: "Jonas", department: "IT", salary: 2000 },
  { name: "Ona", department: "HR", salary: 1800 },
  { name: "Petras", department: "IT", salary: 2200 },
  { name: "Greta", department: "HR", salary: 2100 },
];

function sortByDepartment(employees) {
  return [...employees].sort((a, b) => {
    return a.department.localeCompare(b.department);
  });
}

console.log(sortByDepartment(employees));

function sortBySalary(employees) {
  return [...employees].sort((a, b) => {
    return b.salary - a.salary;
  });
}
console.log(sortBySalary(employees));
