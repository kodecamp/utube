// function
let printDetails = function() {
  console.log("<--- printing person details --->");
  console.log(this.name);
  console.log(this.address);
  console.log(this.age);
};

// printDetails.myProperty = "My Property";
console.dir(printDetails);
// printDetails();

//PersonObject creator function = Constructor
function PersonConstructor(name, address, age) {
  let personObj = {};
  personObj.name = name;
  personObj.address = address;
  personObj.age = age;
  personObj.printDetails = printDetails;
  return personObj;
}

console.dir(PersonConstructor);

let person1 = PersonConstructor("Sunil", "Kanpur", 30);
console.dir(person1);
// let person2 = PersonConstructor("Rakesh", "Lucknow", 35);

// person1.printDetails();
// person2.printDetails();
