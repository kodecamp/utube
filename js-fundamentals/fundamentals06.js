let getDetails = function() {
  return "My name is " + this.name + " and I am " + this.age + " years old.";
};

// Person obj constructor == Formula for creating person objects from values
function PersonConstructor(name, address, age) {
  // Empty object
  // let personObj = {};

  // property creation and assignments
  this.name = name;
  this.address = address;
  this.age = age;

  // using the above created function object --> getDetails
  this.details = getDetails;

  // returns the above created object;
  // return personObj;
}

let person1 = new PersonConstructor("Rakesh", "Delhi", 35);
console.log(person1);
// console.log(person1.details());

let person2 = new PersonConstructor("Dinesh", "Lucnow", 44);
console.log(person2.details());

console.log(person1.details == person2.details);
