// Topics to be covered in this tutorial
//0 printing any value on console

//1. how to run javascript code

//2. how we humans(brain) deals with the data(values) -> Dyanmic Nature of our brain

//3. binding values with name to reuse the values
//4. related values

// name: Sunil,age: 45,address:Lucknow, name:Rakesh, address:Delhi, age:66, name:Mahesh ,address: Muzzafarnagar,age: 55

//Name   Address age
//Sunil  Delhi  66
//Rakesh Lucknow 45
//Mahesh Muzzafarnagar 55

// literal object representation
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

//5. list of values as a single namedValue - arrays
let shopingItemsList = ["Mobile Phone", "Televistion", "Book-JavaScript", "Food Items"];

console.log(shopingItemsList);
//6. representing nothing

let nothing = undefined;
let haveTv = null;
//7. conditions
let someValue = 5;
if (someValue == 5) {
  console.log("Do this");
} else {
  console.log("Do that");
}

console.log("always you have to do this ");
//8. representing set of statements as a single namedValue(Lazy)

// function definition
function doSomething() {
  console.log("I am good.");
  console.log("I am going somewhere");
  console.log("I have someting");
}

// function execution
doSomething();

doSomething();
