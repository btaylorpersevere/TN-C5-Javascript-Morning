/ //Functions with parameters

 // function with one parameter
// function functionName(parm1) {
    //code goes here
//   }
//   functionName(parm1) // during calling or invoking one argument needed
  
//   function areaOfCircle(r) {
//     let area = Math.PI * r * r
//     return area
//  }
//   console.log(areaOfCircle(10)) // should be called with one argument
  
//   function square(number) {
//     return number * number
//   }
  
//   console.log(square(10))



  //Functions with two parameters

  // function with two parameters
// function functionName(parm1, parm2) {
     //code goes here
//   }
//   functionName(parm1, parm2) 

// during calling or invoking two arguments needed
   // Function without parameter doesn't take input, so lets make a function with parameters
//   function sumTwoNumbers(numOne, numTwo) {
//     let sum = numOne + numTwo
//     console.log(sum)
//   }
//   sumTwoNumbers(10, 20) // calling functions

   // If a function doesn't return it doesn't store data, so it should return
  
//   function sumTwoNumbers(numOne, numTwo) {
//     let sum = numOne + numTwo
//     return sum
//   }
  
//   console.log(sumTwoNumbers(10, 20))

 //   function printFullName(firstName, lastName) {
 //     return `${firstName} ${lastName}`
 //   }
 //   console.log(printFullName('Asabeneh', 'Yetayeh'))

//Functions with many parameters
  // function with multiple parameters
 // function functionName(parm1, parm2, parm3,...){
      //code goes here
 //   }
 //   functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed
  
  
   // this function takes array as a parameter and sum up the numbers in the array
 //   function sumArrayValues(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum = sum + arr[i];
//     }
//     return sum;
//   }
//   const numbers = [1, 2, 3, 4, 5];
/      //calling a function
//   console.log(sumArrayValues(numbers));
  
  
 //       const areaOfCircle = (radius) => {
 //         let area = Math.PI * radius * radius;
 //         return area;
 //       }
// //   console.log(areaOfCircle(10))
// Function with a parameter
// In a function we can pass different data types(number, string, boolean, object, function) as a parameter.

// // function with one parameter
// function functionName(parm1) {
//   //code goes her
// }
// functionName(parm1) // during calling or invoking one argument needed

// function areaOfCircle(r) {
//   let area = Math.PI * r * r
//   return area
// }

// console.log(areaOfCircle(10)) // should be called with one argument

// function square(number) {
//   return number * number
// }

// console.log(square(10))
// Function with two parameters
// // function with two parameters
// function functionName(parm1, parm2) {
//   //code goes her
// }
// functionName(parm1, parm2) // during calling or invoking two arguments needed
// // Function without parameter doesn't take input, so lets make a function with parameters
// function sumTwoNumbers(numOne, numTwo) {
//   let sum = numOne + numTwo
//   console.log(sum)
// }
// sumTwoNumbers(10, 20) // calling functions
// // If a function doesn't return it doesn't store data, so it should return

// function sumTwoNumbers(numOne, numTwo) {
//   let sum = numOne + numTwo
//   return sum
// }

// console.log(sumTwoNumbers(10, 20))
// function printFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`
// }
// console.log(printFullName('Asabeneh', 'Yetayeh'))
// Function with many parameters
// // function with multiple parameters
// function functionName(parm1, parm2, parm3,...){
//   //code goes here
// }
// functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed


// // this function takes array as a parameter and sum up the numbers in the array
// function sumArrayValues(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// const numbers = [1, 2, 3, 4, 5];
//     //calling a function
// console.log(sumArrayValues(numbers));


//     const areaOfCircle = (radius) => {
//       let area = Math.PI * radius * radius;
//       return area;
//     }
// console.log(areaOfCircle(10))
// Function with unlimited number of parameters
// Sometimes we do not know how many arguments the user going to pass. Therefore, we should know how to write a function which can take unlimited number of arguments. The way we do it has a significant difference between a function declaration(regular function) and arrow function. Let us see examples both in function declaration and arrow function.

// Unlimited number of parameters in regular function
// A function declaration provides a function scoped arguments array like object. Any thing we passed as argument in the function can be accessed from arguments object inside the functions. Let us see an example

 // Let us access the arguments object
 ​
// function sumAllNums() {
//  console.log(arguments)
// }

// sumAllNums(1, 2, 3, 4)
/ // Arguments(4) [1, 2, 3, 4, calleed: ƒ, Symbol(Symbol.iterator): 
 // function declaration
// ​
// function sumAllNums() {
//   let sum = 0
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i]
//   }
//   return sum
// }

// console.log(sumAllNums(1, 2, 3, 4)) // 10
// console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
// console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 17