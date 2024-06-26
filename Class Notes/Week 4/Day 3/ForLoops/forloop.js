// Loops
// Most of the activities we do in life are full of repetitions. Imagine if I ask you to print out from 0 to 100 using console.log(). To implement this simple task it may take you 2 to 5 minutes, such kind of tedious and repetitive task can be carried out using loop. If you prefer watching the videos, you can checkout the video tutorials

// In programming languages to carry out repetitive task we use different kinds of loops. The following examples are the commonly used loops in JavaScript and other programming languages.

// for Loop
// For loop structure
//for(initialization, condition, increment/decrement){
  // code goes here
//}
for(let i = 10 ; i <= 100; i+=10){
  console.log(i)
  
}

// // 0 1 2 3 4 5
// for(let i = 5; i >= 0; i--){
//   console.log(i)
// }

// 5 4 3 2 1 0
// for(let i = 0; i <= 5; i++){
//   console.log(`${i} * ${i} = ${i * i}`)
// }
// 0 * 0 = 0
// 1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]Adding all elements in the array

// const numbers = [1, 2, 3, 4, 5]
// let sum = 0
// for(let i = 0; i < numbers.length; i++){
//   sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]

// }
//  console.log(sum)  // 15

// // Creating a new array based on the existing array

// // const numbers = [1, 2, 3, 4, 5]
// // const newArr = []
// // let sum = 0
// // for(let i = 0; i < numbers.length; i++){
// //   newArr.push( numbers[i] ** 2)

// // }

// // console.log(newArr)  // [1, 4, 9, 16, 25]
// // const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// // const newArr = []
// // for(let i = 0; i < countries.length; i++){
// //   newArr.push(countries[i].toUpperCase())
// // }

// // console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
// // while loop
// // let i = 0
// // while (i <= 5) {
// //   console.log(i)
// //   i++
// // }

// // // 0 1 2 3 4 5
// // do while loop
// // let i = 0
// do {
//   console.log(i)
//   i++
// } while (i <= 5)

// // 0 1 2 3 4 5
// for of loop
// We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.

// for (const element of arr) {
//   // code goes here
// }
// const numbers = [1, 2, 3, 4, 5]

// for (const num of numbers) {
//   console.log(num)
// }

// // 1 2 3 4 5

// for (const num of numbers) {
//   console.log(num * num)
// }

// // 1 4 9 16 25

// // adding all the numbers in the array
// let sum = 0
// for (const num of numbers) {
//   sum = sum + num  
// 	// can be also shorten like this, sum += num
//   // after this we will use the shorter synthax(+=, -=, *=, /= etc)
// }
// console.log(sum) // 15

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]

// for (const tech of webTechs) {
//   console.log(tech.toUpperCase())
// }

// // HTML CSS JAVASCRIPT REACT NODE MONGODB

// for (const tech of webTechs) {
//   console.log(tech[0]) // get only the first letter of each element,  H C J R N M
// }
// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// const newArr = []
// for(const country of countries){
//   newArr.push(country.toUpperCase())
// }

// console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
// break
// Break is used to interrupt a loop.

// for(let i = 0; i <= 5; i++){
//   if(i == 3){
//     break
//   }
//   console.log(i)
// }

// // 0 1 2
// The above code stops if 3 found in the iteration process.

// continue
// We use the keyword continue to skip a certain iterations.

// for(let i = 0; i <= 5; i++){
//   if(i == 3){
//     continue
//   }
//   console.log(i)
// }

// // 0 1 2 4 5
// 🌕 You are so brave, you made it to this far. Now, you have gained the power to automate repetitive and tedious tasks. You have just completed day 6 challenges and you are 6 steps a head in to your way to greatness. Now do some exercises for your brain and for your muscle.