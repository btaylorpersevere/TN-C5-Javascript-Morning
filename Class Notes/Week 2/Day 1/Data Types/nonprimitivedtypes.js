//Non-Primitive Data Types
//Non-primitive data types are modifiable or mutable. 
//We can modify the value of non-primitive data types after it gets created. 
//Let us see by creating an array. An array is a list of data 
//values in a square bracket. Arrays can contain the same or different data 
//types. Array values are referenced by their index. In JavaScript array index 
//starts at zero. I.e., the first element of an array is found at index zero, 
//the second element at index one, 
//and the third element at index two, etc.
//Example 1
let nums = [1, 2, 3]
console.log(nums)
nums[2] = 30 

console.log(nums)  // [1, 2, 30]

//As you can see, an array, which is a non-primitive data type is mutable. 
//Non-primitive data types cannot be compared by value. 
//Even if two non-primitive data types have the same properties and values,
// they are not strictly equal.

// let nums = [1, 2, 3]
// let numbers = [1, 2, 3]

// console.log(nums == numbers)  // false

// let userOne = {
// name:'Asabeneh',
// role:'teaching',
// country:'Finland'
// }

// let userTwo = {
// name:'Asabeneh',
// role:'teaching',
// country:'Finland'
// }

// console.log(userOne == userTwo) // false


// //Rule of thumb, we do not compare non-primitive data types. Do not compare arrays, functions, or objects. Non-primitive values are referred to as reference types, because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.

// let nums = [1, 2, 3]
// let numbers = nums

// console.log(nums == numbers)  // true

// let userOne = {
// name:'Asabeneh',
// role:'teaching',
// country:'Finland'
// }

// let userTwo = userOne

// console.log(userOne == userTwo)  // true


// let num = 3
// let num 
// num = 4
// num = 5


// let numbers = [1, 2, 3, 4, 5]
// numbers[3]
// numbers[3] = 6
