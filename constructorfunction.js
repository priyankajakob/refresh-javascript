function Participants (person){
    
    this.name = person.name
    this.age = person.age
    //console.log(this.name,this.age)//Priyanka 20

    this.getDetails=function (){ //here "this" is mandatory
        console.log(this) //Participants { name: 'Priyanka', age: 20, getDetails: [Function] }
        return `My name is ${this.name} and my age is ${this.age}`
    }
}

const Person1 = new Participants({name:"Priyanka",age:20})
console.log(Person1.getDetails())
console.log(Person1==Participants)//false //for constructive function initialising with "new" keyword when we compare it gives false
