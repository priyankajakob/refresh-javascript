class Person{
    constructor(person){
        this.name=person.name
        this.age=person.age
        this.marks=person.marks
    }
    getDetails = function(){
        console.log(this) //Person {getDetails: [Function: getDetails],name: 'Priyanja',age: '20'}
    }
    getDetsArrow = ()=>{
        console.log(this) ////Person {getDetails: [Function: getDetails],name: 'Priyanja',age: '20'}
        callInsideFunction()
        function callInsideFunction(){
            console.log(this)//undefined
        }

    }
}

const myPerson = new Person({name:"Priyanja",age:"20",marks:[50,20,30]})
myPerson.getDetails()
myPerson.getDetsArrow()