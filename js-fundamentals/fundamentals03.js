let printDetails = function() {
  console.log("<------------ printing person details ----------------->");
  console.log(this.name);
  console.log(this.address);
  console.log(this.age);
};

// PersonObject creator function = Constructor
function PersonConstructor(name, address, age) {
  return {
    name,
    address,
    age,
    printDetails: printDetails
  };
}

let person1 = PersonConstructor("Sunil", "Kanpur", 30);
let person2 = PersonConstructor("Rakesh", "Lucknow", 35);

person1.printDetails();
person2.printDetails();
