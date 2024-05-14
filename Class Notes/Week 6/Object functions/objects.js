//Everything can be an object and objects do have properties and properties have values, so an object is a key value pair. The order of the key is not reserved, or there is no order. To create an object literal, we use two curly brackets.

//creating an empty object

// const person = {}

//Creating an objecting with values
// Now, the person object has firstName, lastName, age, location, skills and isMarried properties. The value of properties or keys could be a string, number, boolean, an object, null, undefined or a function.

  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    isMarried: true
  }
  console.log(person)

  //Getting values from an object
// We can access values of object using two methods:

// using . followed by key name if the key-name is a one word
// using square bracket and a quote

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545'
  }
  
  // accessing values using .
  console.log(person.firstName)
  console.log(person.lastName)
  console.log(person.age)
  console.log(person.location) // undefined
  
  // value can be accessed using square bracket and key name
  console.log(person['firstName'])
  console.log(person['lastName'])
  console.log(person['age'])
  console.log(person['age'])
  console.log(person['location']) // undefined
  
  // for instance to access the phone number we only use the square bracket method
  console.log(person['phone number'])