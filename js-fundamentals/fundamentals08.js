class Person {
  // constructor Fn
  constructor(name, address, age) {
    // Object Public Properties
    this.name = name;
    this.address = address;
    this.age = age;
  }

  // creating new property details
  details() {
    return "Name : " + this.name + " age : " + this.age;
  }

  // creating new property doSomething
  doSomething() {
    console.log("Doing something...");
  }
}
// use of Constructor Function
let person1 = new Person("Sunil", "Kanpur", 40);
console.log(person1.details());
let person2 = new Person("Sushil", "Lucknow", 50);
console.log(person2.details());

console.log(person1.details == person2.details);

// class Student extends Person
class Student extends Person {
  constructor(name, address, age, id, college) {
    super(name, address, age);
    this.id = id;
    this.college = college;
  }

  details() {
    return super.details() + " id : " + this.id + " college : " + this.college;
  }
}

let student = new Student("Rakesh", "Delhi", 22, 1, "ABES");
console.log(student.details());
