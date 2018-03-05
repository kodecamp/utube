// This call will be used to create objects of students
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
}

// This function creates a list of students
function createDummyStudents() {
  let students = [];
  students.push(new Student("Rakesh", 60));
  students.push(new Student("Shivam", 70));
  students.push(new Student("Satyendra", 85));
  students.push(new Student("Sankarshan", 80));
  students.push(new Student("Sushil", 80));
  // without using class -> object literal notation
  students.push({ name: "Dinesh", marks: 55 });
  return students;
}

let students = createDummyStudents();
console.log(students);
// Problems
//1. Find the student whose name === 'Sushil'
// this function should return true or false;
// predicate fn.
function isName(student) {
  console.log("Function called...");
  return student.name === "Sushil";
}
let foundObj = students.find(isName);

console.log(foundObj);

let objFoundAt = students.findIndex(isName);
console.log(objFoundAt);

//2. Filter all the students whose marks > 70
function marksGt70(student) {
  return student.marks > 70;
}

// this function returns a new array based on filter criteria
let newStudentsGt70 = students.filter(marksGt70);

console.log(newStudentsGt70);

//3. Add 2 to marks who has marks > 75

let studentsMarksGt75 = students.filter(function(student) {
  return student.marks > 75;
});

console.log(studentsMarksGt75);

// This function must return an object
function add2(student) {
  student.marks = student.marks + 2;
  return student;
}

let newArrayWith2MoreMarks = studentsMarksGt75.map(add2);

console.log(newArrayWith2MoreMarks);

//
let resultantStudents = students
  .filter(function(student) {
    return student.marks > 75;
  })
  .map(function(student) {
    student.marks += 2;
    return student;
  });

console.log(resultantStudents);
