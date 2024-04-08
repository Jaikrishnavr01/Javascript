// const person = {

//     firstname : "jai",
//     lastname : "krishna",

//     getName() {
//         // console.log(person.firstname + person.lastname)
//         console.log(this.firstname + this.lastname)
//     }
// }


// function registerUser( country , lang ){
//     console.log(this);

//     this.getName()

//     // console.log(this.getName)

// console.log(`my country is ${country} and  my language is ${lang}`)
// }


// const register = registerUser.bind(person)      
// // register("india" , "tamil")
// // console.log(register)


// // registerUser.call(person,'India' , 'hindi')

// register.apply(person,["india", 'Tamil'])


/* ****************************************** */

//constructor

// function Task(name,  completed ){
//     this.name = name;
//     this.completed = completed

//     //method
//     this .getTodoName  = function(){

//         console.log(this.name, this.completed)
//     } 
// }

//  const todo = new Task("buy books" , false)
//  const todo2 = new Task("learn react" , true)
//  console.log(todo)
//  console.log(todo2)


//prototype

function Todo(name,  completed ){
    this.name = name;
    this.completed = completed
}

Todo.prototype.getTodoName = function(){
    console.log(this.name, this.completed)
}

 const todo = new Todo("buy books" , false)
 const todo2 = new Todo("learn react" , true)
//  console.log(todo)
//  console.log(todo2)

todo.getTodoName()

console.log(todo)

