// /* javascript is blocklevel code it runs line by line 
// Eg :
// console.log("step-1")
// console.log("step-2")
// console.log("step-3")*/


// // This JavaScript code demonstrates various synchronous and asynchronous behaviors.

// // Synchronous part:
// // This section demonstrates synchronous behavior, where each statement executes sequentially.

// // Logging "hello" synchronously.
// console.log('hello')

// // Defining a function `sync()` which logs three steps synchronously when called.
// const sync = () => {
//     console.log("step 1")
//     console.log("step 2")
//     console.log("step 3")
// }

// // Calling the `sync()` function synchronously.
// sync()

// // Declaring variables `a`, `b`, and `c` and performing synchronous addition.
// let a = 100
// let b = 20
// let c = a + b

// // Asynchronous part:
// // This section demonstrates asynchronous behavior using setTimeout() function.

// // setTimeout() is used to execute the provided function after a specified delay.

// // Logging "step - 1" after a delay of 6 seconds.
// setTimeout(() => console.log("step - 1"), 6000)
// // Logging "step - 2" after a delay of 3 seconds.
// setTimeout(() => console.log("step - 2"), 3000)
// // Logging "step - 3" after a delay of 1 second.
// setTimeout(() => console.log("step - 3"), 1000)

// // Logging "bye" synchronously.
// console.log("bye")

// // Logging the value of `c` synchronously.
// console.log(c)

// // Using a for loop to log numbers from 1 to 4 synchronously.
// for (let i = 1; i < 5; i++) {
//     console.log(i)
// }


// /*******************Promise**************************** */
console.log("promise");

//promise

//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const Holiday =  new Promise((resolve, reject) => {

    let Holiday = true
    if(Holiday){
        // resolve(true)
        resolve(3)

    }
    else{
        reject()
    }
})

Holiday.then((days) => console.log(`Holiday granted, going hOme for ${days} days`))
.catch(() => console.log('no granted, not going home') )


// // Holiday.then(goingHome)
// // .catch(notGoing)


// function goingHome(){
//     console.log("Holiday granted, Going home")
// }

// function notGoing(){
//     console.log("no granted, not going home")
// }




// console.log("Coin task")

// // function flipCoin() {
// //     return new Promise((resolve) => {
// //       const randomNumber = Math.random();
// //       resolve(randomNumber < 0.5 ? 'you loss in the toss' : 'you win in the toss');
// //     });
// //   }
  
// //   flipCoin().then((result) => {
// //     console.log(result);
// //   });


// function flipCoin() {
//     return new Promise((resolve, reject) => {
//         const randomNumber = Math.random() * 2;

//         if (randomNumber < 1) {
//             resolve(); 
//         } else {
//             reject(); 
//         }
//     });
// }

// flipCoin()
//     .then(() => console.log("Win")) 
//     .catch(() => console.log("Loss")); 



// let subjectA = new Promise((resolve,reject)=>{
//     const html = true

//     if(html){
//         setTimeout(resolve,5000,"HTML is finised")
//     }

//     else{
//         reject("HTML not completed")
//     }
// })

// let subjectB = new Promise((resolve,reject)=>{
//     const css = true

//     if(css){
//         setTimeout(resolve,5000,"css is finised")
//     }

//     else{
//         reject("css not completed")
//     }
// })

// let subjectC = new Promise((resolve,reject)=>{
//     const js = false

//     if(js){
//         setTimeout(resolve,5000,"js is finised")

//     }
//     else{
//         reject("js not completed")
//     }
// })


// Promise.all: waits for all promises to settle (either resolve or reject) before resolving itself.
// Promise.all([subjectA,subjectB, subjectC])

// Promise.allSettled: waits for all promises to settle (either resolve or reject), regardless of their outcome, then resolves with an array of objects containing the outcome of each promise.
// Promise.allSettled([subjectA,subjectB, subjectC])

// Promise.any:  is a method that takes an array of promises as input and returns a single Promise that resolves as soon as one of the promises in the array resolves. If all of the promises are rejected, it rejects with an AggregateError containing all the rejection reasons. (if all are true it checks based on the timer)
// Promise.any([subjectA,subjectB, subjectC])

// Promise.race: resolves or rejects as soon as one of the promises in the array resolves or rejects (first true value return (or) it returns the false value)
// Promise.race([subjectA,subjectB, subjectC])

// .then((msg)=>console.log(msg))
// .catch((msg)=>console.log(msg))