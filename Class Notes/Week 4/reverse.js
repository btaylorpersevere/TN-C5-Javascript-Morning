// //Reversing array order
// reverse: reverse the order of an array.

// const numbers = [1, 2, 3, 4, 5]
// numbers.reverse() // -> reverse array order
// console.log(numbers) // [5, 4, 3, 2, 1]

// numbers.reverse()
// console.log(numbers) // [1, 2, 3, 4, 5]

// //Sorting elements in array
// // sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
  
//   webTechs.sort()
//   console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
  
//   webTechs.reverse() // after sorting we can reverse it
//   console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]


//   Array of arrays
// Array can store different data types including an array itself. Let us create an array of arrays

// const firstNums = [1, 2, 3]
// const secondNums = [1, 4, 9]

// const arrayOfArray =  [[1, 2, 3], [1, 4, 9]]
// console.log(arrayOfArray[1][2]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0].length)  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]