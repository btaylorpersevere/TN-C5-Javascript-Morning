//declaring a function without a parameter
// function functionName() {
//     // code goes here
//       console.log("Hello World")
//   }
//   functionName()



//   functionName() // calling function by its name and with parentheses//declaring a function without a parameter
//   function functionName() {
//     // code goes here
//   }
//   functionName() // calling function by its name and with parentheses

  //function without a parameter and return
  // function without parameter,  a function which make a number square
// 
  
//   // function without parameter
let numOne = 10 //global variable
let numTwo = 20  //global variable

   function addTwoNumbers() { 
     let sum = numOne + numTwo
    console.log(sum)
   }
    addTwoNumbers() // a function has to be called by its name to be executed 

    function subTwoNumbers() {
        numOne = 400
        numTwo= 200
        let dif = numTwo - numOne
       console.log(dif)
      }
       subTwoNumbers()

  function printFullName (){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}

printFullName() // calling a function