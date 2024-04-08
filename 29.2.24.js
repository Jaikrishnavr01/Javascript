//deconstruct using rest operator

const array = ['ssss','ssfdfd','dfdff','gfgfgfg']

// const array2 =  ['dsds',"jai"]

// console.log([...array , ...array2])


//deconstructor
const [apple, banana, ...rest] = array;

console.log(...rest);


// constructor
const newItems = [...array, "more stuffs"]
console.log(newItems)


// using objects

const user = {
    name : "ram",
    photos : [1,2,3,4,5,6,7],
    age : 25,

    analytics: {
        classes: "JS",
        batch :"cbe"
    }
}

const {age , name }=  user 
const { classes } = user.analytics

console.log(age, name);
console.log(classes)




// export import 

import hello from "./utils.js";
import { sayhi } from "./utils.js";

sayhi();


hello();


// IIFE (Immediately Invoked Function Expression) 

(function jk(){
    console.log("hello iife");
})();

