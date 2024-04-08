// let a = ["apple", "banana", "carrot"];

// a.forEach(function(e){
//     console.log(e) 
// })

// console.log("***************************")


// for (let i = 0; i < a.length; i++) {
//     console.log(a[i] +"     "+ i);
// }


// console.log("****************************")

//  const array = ["apple", "banana", "carrot"];



// for (let index in array) {
//   console.log(" Value: " + array[index]);
// }



    // const count = [12,13,14,10,45,99,12] 
    // let countTotal = count.reduce(function(total , element){
    //     return total*element
    // })

    // console.log(countTotal)
  

let myArray = [123 , 'hjd', 'dfd']
    
let x = localStorage.setItem('myArray', JSON.stringify(myArray));

const storedArray = JSON.parse(localStorage.getItem('myArray'));

console.log(typeof storedArray);
console.log(Array.isArray(storedArray))