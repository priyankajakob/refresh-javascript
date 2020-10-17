console.log(name)

var name='priyanka' //es5

//console.log(age1,age2) //ReferenceError: Cannot access 'age1' before initialization
let age1=20,age2
age2=30
age1=22
console.log(age1,age2)

//console.log(location)//ReferenceError: Cannot access 'location' before initialization
const location="Bangalore"
//location="Mysore"//TypeError: Assignment to constant variable.
console.log(location)
