// Day 1: *see variable.js;

// Day 2: HW will help you practice loops, arrays, objects and functions;

// #1
// Create a function that returns the number of true values there are in an array

const testArray = [
  true, //0
  false, //1
  false, //2
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
];

// function numTrue() {
//     let length = testArray.length;
//     console.log(length);

//     for (let value of testArray) {
//         if (value === false) {
//             continue;
//         }

//         let newArray = new Array;
//         newArray.push(value)

//         console.log(newArray)

//         let countTrue = newArray.length;
//         console.log(`There are exactly ${countTrue} True values`);
//     }
// }

// numTrue()

function arrayCount(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == true) {
      result.push(arr[i]);
    }
  }
  console.log(result.length);
}

arrayCount(testArray);

console.log("----------------");

function arrayCountAgain(arr) {
  let count = 0;
  for (let element of arr) if (element === true) count++;
  console.log(count);
}

arrayCountAgain(testArray);

// #2
// Write a function that receives a car object...
// ...as an argument and outputs the car's make and model.

// 1) Declare Variables
// 2) Function to receive object 'car' as argument
// 3) Output the car's make and model

let car = {
  make: "Mercedes-Benz",
  model: "C230",
  year: 2006,
};

function myCar() {
  console.log(`My current vehicle is a ${car.year} ${car.make} ${car.model}`);
}

myCar(car);

// #3 Write a function to get the first element in an array

function getElement(arr) {
  let firstElement = arr[0];
  console.log(firstElement);
}
getElement(testArray);

// DAY 3
// Pyramid problem:
// print:  (using a loop)
// #
// ##
// ###
// ####
// #####

// Write a loop that makes seven calls to console.log to output the pyramid

function newPyramid(rows, character) {
  let str = " ";
  for (let i = 0; i < rows; i++){
    str += character;
    console.log(str);
    // let newRow = character.length + 1;
  }
}

newPyramid(5, "#")

// Extra for experts: 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either  "A," "B," "C," "D," or "F." Call that function for a few different
// scores and log the result to make sure it works.

// Need to create a list of scores to correspond to a number (use If statement)
function assignGrade(score) {
    if (score >= 91) {
        console.log("A")
    }
    else if (score >= 81) {
        console.log("B")
    }
    else if (score >= 71) {
        console.log("C")
    }
    else if (score >= 61) {
        console.log("D")
    }
    else if (score <= 60.99) {
        console.log("F")
    };
    
}

assignGrade(59.999) // no output if 60.999 is input, check with the TAs


// Vitoria's Javascript Practice

const person = {
    firstName: "Todd",
    lastName: "Albert",
    email: "todd@bocacode.com",
  }

function personInfo (info) {
    console.log(`${info.firstName} ${info.lastName}`)
}

personInfo(person)

// 1. Write a function that adds two numbers together.

function addition (a,b) {
   return a + b
}

console.log(addition(2, 2))

// 2. Create a function that takes the age in years and returns the age in days.

function daysAge (yrs) {
  return yrs * 365
}
console.log(daysAge(31))

// 3. Create a function that takes an array containing only numbers and returns the first element.

function element (arr) {
  return arr[0]
}

console.log(element('STRING'))
