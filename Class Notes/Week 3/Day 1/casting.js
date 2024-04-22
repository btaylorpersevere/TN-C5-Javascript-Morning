//Checking Data Types
//To check the data type of a certain variable we use the typeof method

// Different javascript data types
// Let's declare different data types

let firstName      // string
firstName = "Tom"
firstName = "Jerry"
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                 // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

// console.log(typeof age)
// console.log(typeof 'Asabeneh')  // string
// console.log(typeof firstName)   // string
// console.log(firstName)
//  console.log(typeof 10)          // number
// console.log(typeof 3.14)        // number
// console.log(typeof true)        // boolean
// console.log(typeof false)       // boolean
// console.log(typeof NaN)         // number
// console.log(typeof job)         // undefined
// console.log(typeof undefined)   // undefined
// console.log(typeof null)        // object

//Changing Data Type (Casting)
//Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), 
//Number(), + sign, str() When we do arithmetic operations string numbers should be
 //first converted to integer or float if not it returns an error.


 //Casting - converting a string to a number
//let num = '10'
//  console.log(typeof num)
// let numInt = parseInt(num)
// console.log(typeof numInt)
// console.log(numInt) // 10

// let num = '10'
// let numInt = Number(num)

// console.log(numInt) // 10

////String to Float
// We can convert string float number to a float number. Any float number inside a quote is a string float number. An example of a string float number: '9.81', '3.14', '1.44', etc. We can convert string float to number using the following methods:

// Built-in Javascript Method
// parseFloat()
// Number()
// Plus sign(+)

//Example 1

// let num = '9.81'
// console.log(typeof num)
// let numFloat = parseFloat(num)
// console.log(typeof numFloat)
// console.log(numFloat) // 9.81


//Converting a float to an integer

//We can convert float numbers to integers. We use the following method to convert 
//float to int:

//parseInt()


let num = 10.51
let numInt = parseInt(num)

console.log(numInt) // 9
