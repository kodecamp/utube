// students in college

let student1 = {
  name: 'Satyendra',
  marks: 80
};

let student2 = {
  name: 'Rakesh',
  marks: 59
};


// hiring organization

// mechanism to test eligiblility of any student
function isEligible(student) {
  // assumed student is not eligible
  let flag = false;
  console.log(student.marks);
  if(student.marks > 60) {
    flag = true;
  }
  return flag;
}

// mechanism to take interview
function interview(student, eligibilityTestingMechanism) {
  let isEligible = eligibilityTestingMechanism(student);
  console.log(isEligible);
  if(isEligible === true) {
    console.log('Eligible for interview');
  }else {
    console.log('Not eligible for interview');
  }
  return isEligible;
}


let isQualified = interview(student1, isEligible);
console.log(isQualified);

isQualified = interview(student2, isEligible);


function calculate(number1, number2 , operationFn) {
  let result = operationFn(number1, number2);
  return result;
}


let sumOperation = function (number1, number2) {
  return number1 + number2;
};

console.log(calculate(3, 5, sumOperation));

let result2 = calculate(40,10, function(number1, number2) {
  return number1*number2;
});

console.log(result2);
