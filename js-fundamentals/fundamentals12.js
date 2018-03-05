// Arrays are objects too
// arrays have too many functions which operates on the array items.
let numbers = [];
console.log(numbers);
numbers.push(10);

numbers.push(20);
numbers.push(30);


numbers.unshift(40);
console.log(numbers);
let poppedItem = numbers.pop();
console.log(poppedItem);

function processItem(item,index) {
  console.log(index,item);
}
numbers.forEach(processItem);
// numbers.forEach(function(number) {
//   console.log(number);
// });

// console.log(numbers);

// returns a new array
let mergedArray = numbers.concat([10,20,60]);

console.log(mergedArray);

let clonedArray = mergedArray.concat([]);
mergedArray.pop();
mergedArray.pop();
mergedArray.pop();
console.log('merged array : ' + mergedArray);
console.log(clonedArray);
