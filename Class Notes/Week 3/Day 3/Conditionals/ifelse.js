//Conditionals

//Conditional statements are used for make decisions based on different conditions. By default , statements in JavaScript script executed sequentially from top to bottom. If the processing logic require so, the sequential flow of execution can be altered in two ways:

// Conditional execution: a block of one or more statements will be executed if a certain expression is true
// Repetitive execution: a block of one or more statements will be repetitively executed as long as a certain expression is true. In this section, we will cover if, else , else if statements. The comparison and logical operators we learned in the previous sections will be useful in here.
// Conditions can be implementing using the following ways:

// if
// if else
// if else if else


//If Statement
//In JavaScript and other programming languages the key word if is to used check if a condition is true and to execute the block code. To create an if condition, we need if keyword, condition inside a parenthesis and block of code inside a curly bracket({}).

// syntax
// if (condition) {
    //this part of code runs for truthy condition
//   }

  let numb = 3
  if (numb > 0) {
    console.log(numb)
  }
  // //  3 is a positive number
  
  //As you can see in the condition example above, 3 is greater than 0, so it is a positive number. The condition was true and the block of code was executed. However, if the condition is false, we won't see any results.

//   let isRaining = true
// if (isRaining = true) {
//   console.log('Remember to take your rain coat.')
// }



//The same goes for the second condition, if isRaining is false the if block will not be executed and we do not see any output. In order to see the result of a falsy condition, we should have another block, which is going to be else.

//IF ELSE
// If condition is true the first block will be executed, if not the else condition will be executed.

// syntax
// if (condition) {
//     // this part of code runs for truthy condition
//   } else {
//     // this part of code runs for false condition
//   }

  let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
 }
// // //  3 is a positive number

num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  -3 is a negative number

let isRaining = true
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// You need a rain coat.

isRaining = false
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// // No need for a rain coat.

// The last condition is false, therefore the else block was executed. What if we have more than two conditions? In that case, we would use else if conditions.

//If ElseIf Else

// In our daily lives, we make decisions on daily basis. We make decisions not by checking one or two conditions instead we make decisions based on multiple conditions. As similar to our daily life, programming is also full of conditions. We use else if when we have multiple conditions.

// syntax
if (condition) {
    // code
} else if (condition) {
  // code
} else {
   //  code

 }


let a = true
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}

