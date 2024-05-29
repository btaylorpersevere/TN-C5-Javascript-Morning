// /*Template Literals (Template Strings)
// To create a template strings, we use two back-ticks. We can inject data as expressions inside a template string. To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign. See the syntax below.*/

// //Syntax
// `String literal text`
// `String literal text ${expression}`

// console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
// let a = 2
// let b = 3
// console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'
// let age = 250
// let fullName = firstName + ' ' + lastName

// let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
// let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
// console.log(personInfoTwo)
// console.log(personInfoThree)

// //Using a string template or string interpolation method, we can add expressions, which could be a value, or some operations (comparison, arithmetic operations, ternary operation).

let a = 2
let b = 3
//console.log(`${a} is greater than ${b}: ${a > b}`)
console.log('a is greater than : ${a > b)')


// //String Methods
// Everything in JavaScript is an object. A string is a primitive data type that means we can not modify it once it is created. The string object has many string methods. There are different string methods that can help us to work with strings.

// //length: The string length method returns the number of characters in a string included empty space.

// let js = 'JavaScript'
// console.log(js.length)         // 10
// let firstName = 'Asabeneh'
// console.log(firstName.length)  // 8

// //Accessing characters in a string: We can access each character in a string using its index. In programming, counting starts from 0. The first index of the string is zero, and the last index is the length of the string minus one.

// let string = 'JavaScript'
// let firstLetter = string[0]

// console.log(firstLetter)           // J

// let secondLetter = string[1]       // a
// let thirdLetter = string[2]
// let lastLetter = string[9]

// console.log(lastLetter)            // t

// let lastIndex = string.length - 1

// console.log(lastIndex)  // 9
// console.log(string[lastIndex])    // t

// //toUpperCase(): this method changes the string to uppercase letters.

// let string = 'JavaScript'

// console.log(string.toUpperCase())     // JAVASCRIPT

// let firstName = 'Asabeneh'

// console.log(firstName.toUpperCase())  // ASABENEH

// let country = 'Finland'

// console.log(country.toUpperCase())    // FINLAND

// //toLowerCase(): this method changes the string to lowercase letters.
// let string = 'JavasCript'

// console.log(string.toLowerCase())     // javascript

// let firstName = 'Asabeneh'

// console.log(firstName.toLowerCase())  // asabeneh

// let country = 'Finland'

// console.log(country.toLowerCase())   // finland



// //substr(): It takes two arguments, the starting index and number of characters to slice.

// let string = 'JavaScript'
// console.log(string.substr(4,6))    // Script

// let country = 'Finland'
// console.log(country.substr(3, 4))   // land

// //substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.

// let string = 'JavaScript'

// console.log(string.substring(0,4))     // Java
// console.log(string.substring(4,10))    // Script
// console.log(string.substring(4))       // Script

// let country = 'Finland'

// console.log(country.substring(0, 3))   // Fin
// console.log(country.substring(3, 7))   // land
// console.log(country.substring(3))      // land

// //split(): The split method splits a string at a specified place.

// let string = '30 Days Of JavaScript'

// console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
// console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

// let firstName = 'Asabeneh'

// console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
// console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

// let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

// console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
// console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

// trim(): Removes trailing space in the beginning or the end of a string.

// let string = '   30 Days Of JavaScript   '

// console.log(string)
// console.log(string.trim(' '))

// let firstName = ' Asabeneh '

// console.log(firstName)
// console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string

