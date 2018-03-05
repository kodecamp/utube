// Person obj constructor == Formula for creating person objects from values
function PersonConstructor(name, address, age) {
  this.name = name;
  this.address = address;
  this.age = age;

  // using the above created function object --> getDetails
  // this.details = getDetails;
}

let sharedObj = {
  details: function() {
    return "Name : " + this.name + " and " + this.age + " years old.";
  },
  doSomething: function() {
    console.log("doing something");
  }
};
console.dir(PersonConstructor.prototype);
PersonConstructor.prototype = Object.assign(PersonConstructor.prototype, sharedObj);

console.dir(PersonConstructor.prototype);

// console.dir(PersonConstructor.prototype);
let person1 = new PersonConstructor("Rakesh", "Delhi", 35);
console.log(person1.details());

// person1.doSomething = function() {
//   console.log("Doing someting");
// };

person1.doSomething();

let person2 = new PersonConstructor("Dinesh", "Lucnow", 44);
console.log(person2.details());

person2.doSomething();

console.log(person1.details == person2.details);
