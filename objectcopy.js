const Person1 = {
    name : "Priyanka",
    age : "20",
    getDetails : function (){
        //console.log(this)//{ name: 'Priyanka', age: '20', getDetails: [Function: getDetails] }
        console.log(this.name)   
    }
}

const Person2=Person1//this is assignment not even shallow copy so change in property of one object will change another. Alternative is spread or Object.assign, but problem with that is if we change address.location it will change in both, then we need deep clone
Person2.name="Preethy"
console.log(Person1)//{ name: 'Preethy', age: '20', getDetails: [Function: getDetails] }
console.log(Person2)//{ name: 'Preethy', age: '20', getDetails: [Function: getDetails] }
//Both objects above got changed, that is why we need deep clone