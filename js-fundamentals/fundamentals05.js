//function
let printDetailsWithArg = function(personObj) {
  console.log("Function with Args");
  console.log(personObj.name);
  console.log(personObj.address);
  console.log(personObj.age);
};

printDetailsWithArg({ name: "Sunil", address: "Kanpur", age: 30 });
// function
let printDetailsWithThis = function() {
  console.log("Function with this");
  console.log(this.name);
  console.log(this.address);
  console.log(this.age);
};

// personObj.printDetailsWithThis();

// printDetailsWithThis();
console.dir(printDetailsWithThis);

// personObj.printDetailsWithThis();
printDetailsWithThis.call({ name: "Sunil", address: "Kanpur", age: 30 });

let person = {
  name: "Rakesh",
  address: "Delhi",
  age: 35,
  getDetails: function() {
    return this.name + "_" + this.address + "_" + this.age;
  }
};

let details = person.getDetails();

console.log(details);
