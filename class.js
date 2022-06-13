class OPTIONSAPI{
    constructor(){
        this.count = 0
        this.fname = "Arjun"
    
    }
    increment(){
        this.count++
    }
    add(){

    }
}

var obj = new OPTIONSAPI()
obj.increment
obj.count


var todos= [
    {
        id:1,
        name:"ES6",
        status:false
    },
    {
        id:2,
        name:"Vue",
        status:false
    }
]

for(todo in todos){
    console.log(todos[todo])
}