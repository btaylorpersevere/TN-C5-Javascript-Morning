// Unlimited number of parameters in arrow function
// Arrow function does not have the function scoped arguments object. To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name. Any thing we passed as argument in the function can be accessed as array in the arrow function. Let us see an example

// Let us access the arguments object
​
const sumAllNums = (...args) => {
 // console.log(arguments), arguments object not found in arrow function
 // instead we use a parameter followed by spread operator (...)
 console.log(args)
}
sumAllNums(1, 2, 3, 4)

// //declaration Function
//  function myName(firstName, lastName) {
//   let fullName = firstName + lastName
//    console.log(fullName)
//  }
//  myName("Bridgett", "Taylor")


// //arrow function
// const myName = (firstName, lastName) => {
//   let fullName = firstName + lastName
//    console.log(fullName)
//  }
//  myName("Bridgett", "Taylor")

// }
// // [1, 2, 3, 4]
// // function declaration
// ​
// const sumAllNums = (...args) => {
//   let sum = 0
//   for (const element of args) {
//     sum += element
//   }
//   return sum
// }

// console.log(sumAllNums(1, 2, 3, 4)) // 10
// console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
// console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// // Anonymous Function

// // Anonymous function or without name

// const anonymousFun = function() {
//   console.log(
//     'I am an anonymous function and my value is stored in anonymousFun'
//   )
// }
// Expression Function
// Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable. Look at the example below.

// // Function expression
// const square = function(n) {
//   return n * n
// }

// console.log(square(2)) // -> 4
// Self Invoking Functions
// Self invoking functions are anonymous functions which do not need to be called to return a value.

// (function(n) {
//   console.log(n * n)
// })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

// let squaredNum = (function(n) {
//   return n * n
// })(10)

// console.log(squaredNum)
// Arrow Function
// Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.

// Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.

// // This is how we write normal or declaration function
// // Let us change this declaration function to an arrow function
// function square(n) {
//   return n * n
// }

// console.log(square(2)) // 4

// const square = n => {
//   return n * n
// }

// console.log(square(2))  // -> 4

// // if we have only one line in the code block, it can be written as follows, explicit return
// const square = n => n * n  // -> 4
// const changeToUpperCase = arr => {
//   const newArr = []
//   for (const element of arr) {
//     newArr.push(element.toUpperCase())
//   }
//   return newArr
// }

// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// console.log(changeToUpperCase(countries))

// // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
// const printFullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`
// }

// console.log(printFullName('Asabeneh', 'Yetayeh'))