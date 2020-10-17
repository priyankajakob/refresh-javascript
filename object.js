const Person1 = {
    names : ["Priyanka","Preethy"],
    age : "20",
    getDetails : function (){
        //console.log(this)//{ name: 'Priyanka', age: '20', getDetails: [Function: getDetails] }
        this.names.forEach(name=>{
            console.log(this)//{names: [ 'Priyanka', 'Preethy' ],age: '20',getDetails: [Function: getDetails]}
        }) 
    }
}
Person1.getDetails()

