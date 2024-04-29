// //Syntax of an array

// // const arr = Array()
// // // or
// // // let arr = new Array()
// // console.log(arr) // []

// // //Example

// // syntax
// // This the most recommended way to create an empty list
// const arr = []
// console.log(arr)

// //Creating an array with values:

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
// // const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
// // const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
// // const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
// // const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// // const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// // Print the array and its length

// console.log('Numbers:', numbers)
// console.log('Number of numbers:', numbers.length)

// // console.log('Fruits:', fruits)
// // console.log('Number of fruits:', fruits.length)

// // console.log('Vegetables:', vegetables)
// // console.log('Number of vegetables:', vegetables.length)

// // console.log('Animal products:', animalProducts)
// // console.log('Number of animal products:', animalProducts.length)

// // console.log('Web technologies:', webTechs)
// const arr2 = [
//     'Asabeneh',
//     250,
//     true,
//     { country: 'Finland', city: 'Helsinki' },
//     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
// ] // arr containing different data types
// console.log(arr2)// console.log('Number of web technologies:', webTechs.length)

// // console.log('Countries:', countries)
// // console.log('Number of countries:', countries.length)

// //Arrays can have different items or different datatypes

// //Using split in an array

// let js = 'JavaScript'
// const charsInJavaScript = js.split('')

// console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// const companies = companiesString.split(',')

// console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
// let txt =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const words = txt.split(' ')

// console.log(words)
// // the text has special characters think how you can just get only the words
// // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

// //Accessing array items using index
// // We access each element in an array using their index. An array index starts from 0. The picture below clearly shows the index of each element in the array.

// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let firstFruit = fruits[0] // we are accessing the first item using its index

// console.log(firstFruit) // banana

// secondFruit = fruits[1]
// console.log(secondFruit) // orange

// let lastFruit = fruits[3]
// console.log(lastFruit) // lemon
// // Last index can be calculated as follows

// let lastIndex = fruits.length - 1
// lastFruit = fruits[lastIndex]

// console.log(lastFruit)  // lemon

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers

// console.log(numbers.length)  // => to know the size of the array, which is 6
// console.log(numbers)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
// console.log(numbers[0])      //  -> 0
// console.log(numbers[5])      //  -> 100

// let lastIndex = numbers.length - 1;
// console.log(numbers[lastIndex]) // -> 100

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ] // List of web technologies
  
//   console.log(webTechs)        // all the array items
//   console.log(webTechs.length) // => to know the size of the array, which is 7
//   console.log(webTechs[0])     //  -> HTML
//   console.log(webTechs[6])     //  -> MongoDB
  
//   let lastIndex = webTechs.length - 1
//   console.log(webTechs[lastIndex]) // -> MongoDB

  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ] // List of countries
  
  console.log(countries)      // -> all countries in array
  console.log(countries[0])   //  -> Albania
  console.log(countries[10])  //  -> Kenya
  
  let lastIndex = countries.length - 1;
  console.log(countries[lastIndex]) //  -> Kenya

  //