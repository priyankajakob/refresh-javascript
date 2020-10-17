const multiply = number=>number*2

console.log(multiply(2))

function dummy(){
    console.log(this) //global object
}
dummy()

console.log(this) //{}

const arrowTestThis = ()=>console.log(this)
arrowTestThis() //{}