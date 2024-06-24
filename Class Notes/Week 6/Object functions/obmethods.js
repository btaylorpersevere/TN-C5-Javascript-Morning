//  //Creating object methods
// / // Now, the person object has getFullName properties. The getFullName is function inside the person object and we call it an object method. The this key word refers to the object itself. We can use the word this to access the values of different properties of the object. We can not use an arrow function as object method because the word this refers to the window inside an arrow function instead of the object itself. Example of object:

//  const person = {
//      firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//      country: 'Finland',
//     city: 'Helsinki',
//      skills: [
//       'HTML',
// //       'CSS',
// //       'JavaScript',
// //       'React',
// //       'Node',
// //       'MongoDB',
// //       'Python',
// //       'D3.js'
// //     ],
// //     getFullName: function() {
// //       return `${this.firstName} ${this.lastName}`
// //     }
// //    }
  
// //   console.log(person.getFullName())
// //   // Asabeneh 
// //   console.log(person.country)
// // console.log(person.city)
// // console.log(person['age'])
// // console.log(person.skills[2])

// //etting new key for an object
// // An object is a mutable data structure and we can modify the content of an object after it gets created.

// // Setting a new keys in an object

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     getFullName: function() {
//        return `${this.firstName} ${this.lastName}`
//      }
//    }
//   person.nationality = 'Ethiopian'
//   person.country = 'Finland'
//   person.title = 'teacher'
//   person.skills.unshift("HTML")
//    person.skills.pop()
// console.log(person)
  
  // person.getPersonInfo = function() {
  //   let skillsWithoutLastSkill = this.skills
  //     .splice(0, this.skills.length - 1)
  //     .join(', ')
  //   let lastSkill = this.skills.splice(this.skills.length - 1)[0]
  

//     let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
//     let fullName = this.getFullName()
//     let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
//     return statement
//   }
//   console.log(person)
//   console.log(person.getPersonInfo())

//   Object Methods
// There are different methods to manipulate an object. Let us see some of the available methods.

// Object.assign: To copy an object without modifying the original object

const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }
   const copyPerson = Object.assign({}, person)
   console.log(copyPerson)
  
   //Object methods: Object.assign, Object.keys, Object.values, Object.entries
  //hasOwnProperty
  
//   const copyPerson = Object.assign({}, person)
//   console.log(copyPerson)

  //  Getting object values using copy keys

const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
 const address = Object.keys(copyPerson.address)
 console.log(address) //['street', 'pobox', 'city']

//   Getting object keys and values using Object.entries()
//  Object.entries:To get the keys and values in an array

// const entries = Object.entries(copyPerson)
//  console.log(entries)


// // Checking properties using hasOwnProperty()
// // hasOwnProperty: To check if a specific key or property exist in an object

//  console.log(copyPerson.hasOwnProperty('name'))
//  console.log(copyPerson.hasOwnProperty('score'))