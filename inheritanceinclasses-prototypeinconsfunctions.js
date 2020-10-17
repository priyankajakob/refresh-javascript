class Animal{
    constructor(){
        this.type="pet"
    }
}

class Cat extends Animal{
    constructor(){
        super() // without this you will get the error //ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor for cat1.type
        this.sound="meow"
    }
    getSound = ()=>console.log(`Sound is ${this.sound}`)
}

const cat1 = new Cat()
cat1.getSound() //Sound is meow
console.log(cat1.type) //pet //super call is important