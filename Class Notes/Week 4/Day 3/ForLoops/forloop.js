// For loop structure
// for(initialization, condition, increment/decrement){
//   }

//   for(let i = 0; i < 10; i++){
//     console.log(i, "Hello")
//   }
  
//   // 0 1 2 3 4 5

//   //Ex. 2

//   for(let i = 5; i >= 0; i--){
//     console.log(i)
//   }
  
//   // 5 4 3 2 1 0

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
  console.log(newArr)
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]