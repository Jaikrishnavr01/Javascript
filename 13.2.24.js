// function greet(name) {
//     console.log("Welcome to our website" + name);
// }

// console.log('rest of the code')

// function signUp(){
//     const name = prompt('Enter the name')
//     greet(name);
// }

// greet("ram");

//global scope

// let fruit = "orange";
// let  kg  = 10;

// var price = 300;

// //function scope

// function fruits(){
//     let fruit = "orange";
// let  kg  = 10;

// var price = 500;

// console.log(fruit, kg, price)
// }

// // block scope 

// for(fruit= 0; fruit < 10; fruit++){
//     console.log(fruit);
// }

// if(true){
//     let fruit = "kivi";
// let  kg  = 60;

// var price = 600;

// console.log(fruit, kg, price)
// }

// fruits();
// console.log(fruit, kg , price)


//for-of
let names = ['A' ,'B', 'C','D']
for(let name of names){
    if(name === "C"){
        console.log('break now');
        break;

    }
    else{
        console.log(name)
    }
}

//for..in
item = {
    name: "phone", 
    quantity:1,
    price:25000
  }
  
  for(let key in item){
    console.log(item[key])
  }