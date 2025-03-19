// --------------Question-01------------------
let score = 71;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}


// --------------Question-02------------------
let temperature = 30;

if (temperature > 25) {
  console.log("It's hot outside!");
} else {
  console.log("It's cool outside!");
}

// --------------Question-03------------------
console.log(5 === 5);      // true (same value and type)
console.log(5 === "5");    // false (same value, different type)
console.log(true === 1);   // false (boolean vs number)

// --------------Question-04------------------
let num = 10;

if (num > 0) {
  if (num % 2 === 0) {
    console.log("Positive even number");
  } else {
    console.log("Positive odd number");
  }
} else {
  console.log("Number is not positive");
}


// --------------Question-05------------------
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";

console.log(status); // Output: "Adult"

// --------------Question-06------------------
let a = 10;
let b = 20;

if (a > 5 && b > 15) {
  console.log("Both conditions are true");
} else {
  console.log("At least one condition is false");
}

// --------------Question-07------------------
let x = 10;
let y = 5;

console.log(x > y);  // true
console.log(x === "10");  // false
console.log(y <= 5);  // true

// --------------Question-08------------------
let e = 5;
let f = 10;

if (e > 3 || f < 5) {
  console.log("At least one condition is true");
} else {
  console.log("Both conditions are false");
}

// --------------Question-09------------------
let c = 10;
if (c > 5) {
  if (c < 15) {
    console.log("x is between 5 and 15");
  } else {
    console.log("x is greater than or equal to 15");
  }
} else {
  console.log("x is 5 or less");
}

// ---------Exam-1-------------------
const myObject = {
  a: 1,
  b: 2,
  c: 3
 };
 
 // for (let prop in myObject) {
 //  console.log(myObject[prop]);
 // }
 
 // ---------Exam-2-------------------
 // let str = "Mississippi";
 // console.log(str.indexOf("i", 3));
 
 // ---------Exam-3-------------------
 const str = "Hello";
 str[0] = "h";
 // console.log(str);
 
// ---------Exam-4-------------------
//  const x = ""
//  if(!x.length){
//  console.log("Hey")
//  }else{
//  console.log("Hi")
//  }