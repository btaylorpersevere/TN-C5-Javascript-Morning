//Booleans
// A boolean data type represents one of the two values:true or false. Boolean value is either true or false. The use of these data types will be clear when you start the comparison operator. Any comparisons return a boolean value which is either true or false.

let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

//Truthy values
// All numbers(positive and negative) are truthy except zero
// All strings are truthy except an empty string ('')
// The boolean true



// Falsy values
// 0
// 0n
// null
// undefined
// NaN
// the boolean false
// '', "", ``, empty string
// It is good to remember those truthy values and falsy values. In later section, we will use them with conditions to make decisions.

//Undefined
// If we declare a variable and if we do not assign a value, the value will be undefined. In addition to this, if a function is not returning the value, it will be undefined.

let firstName
console.log(firstName) //not defined, because it is not assigned to a value yet


//NULL Values
let empty = null
console.log(empty) // -> null , means no value