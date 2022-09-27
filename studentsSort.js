const students = [
  { id: 1, name: "bruce", age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex", age: 22 },
  { id: 4, name: "alex", age: 30 },
];

const callback = (a, b) => {
  if (a.name === b.name) {
    return a.age - b.age;
  } else {
    return a - b;
  }
};

const sortedStudents = students.sort(callback);
console.log(sortedStudents);
