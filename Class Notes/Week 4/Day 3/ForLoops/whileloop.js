// // while loop
// let i = 0
// while (i <= 5) {
//   console.log(i)
//   i++
// }

// // 0 1 2 3 4 5

// // do while loop
// let i = 0
// do {
//   console.log(i)
//   i++
// } while (i <= 5)

 // 0 1 2 3 4 5
// for of loop
// We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.

// for (const element of arr) {
//   // code goes here
// }

const numbers = [1, 2, 3, 4, 5]

// for (const num of numbers) {
//   console.log(num)
// }

// 1 2 3 4 5

// for (const num of numbers) {
//   console.log(num * num)
// }

// // 1 4 9 16 25

// adding all the numbers in the array
let sum = 0
for (const num of numbers) {
  sum = sum + num  
// 	// can be also shorten like this, sum += num
//   // after this we will use the shorter synthax(+=, -=, *=, /= etc)
 }
 console.log(sum) // 15

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

for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}

// // 0 1 2 4 5