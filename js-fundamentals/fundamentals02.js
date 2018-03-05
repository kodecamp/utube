let person1 = {
  name: "Sunil",
  address: "Delhi",
  age: 66
};

let person2 = {
  name: "Rakesh",
  address: "Lucknow",
  age: 45
};

// array -------0        1        2         3
let register = [person1, person2, person3, person4];

// functions == verbs
function printDetails(personObj) {
  console.log("------- printing person details --------");
  console.log(personObj.name);
  console.log(personObj["address"]);
}
