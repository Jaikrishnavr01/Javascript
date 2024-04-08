
// const Holiday =  new Promise((resolve, reject) => {

//     let Holiday = true
//     if(Holiday){
//         // resolve(true)
//         resolve(3)
//     }
//     else{

//         //reject(false)
//         reject()
//     }
// })

// Holiday.then((days) => console.log(`Holiday granted, going hOme for ${days} days`)) //true
// .catch(() => console.log('no granted, not going home') ) //false



/**************************************** Promise.all  ************************************************ */
/* definition  -> If the condition is true it will  returns all the value in array otherwise it will return a rejected value*/


// let subjectA = new Promise((resolve,reject)=>{
//     const html = true

//     if(html){
//         setTimeout(resolve,3000,"HTML is finised")
//     }

//     else{
//         reject("HTML not completed")
//     }
// })

// let subjectB = new Promise((resolve,reject)=>{
//     const css = true

//     if(css){
//         setTimeout(resolve,2000,"css is finised")
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

// Promise.all([subjectA,subjectB,subjectC])
// .then((msg)=>console.log(msg))
// .catch((msg)=>console.log(msg +" its a error"))



/************************************** promise.allSettled ********************************************************** */  

/* definition ->  It takes array of promise and returns a single promise in form of array of objects (it also indicating the status of each promise ( weather it is fulfilled or rejected ).) */

// let subjectA = new Promise((resolve,reject)=>{
//     const html = true

//     if(html){
//         setTimeout(resolve,3000,"HTML is finised")
//     }

//     else{
//         reject("HTML not completed")
//     }
// })

// let subjectB = new Promise((resolve,reject)=>{
//     const css = true

//     if(css){
//         setTimeout(resolve,2000,"css is finised")
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

// Promise.allSettled([subjectA,subjectB, subjectC])
// .then((msg)=>console.log(msg))
// .catch((msg)=>console.log(msg +" its a error"))


/* *********************************************** promise.any *************************************************** */

/* defintion -> it returns the first fullfilled promise in  an array (If all promises are rejected, then it returns AggregateError containing  ` all promise rejected `.) */

let subjectA = new Promise((resolve,reject)=>{
    const html = false

    if(html){
        setTimeout(resolve,3000,"HTML is finised")
    }

    else{
        reject("HTML not completed")
    }
})

let subjectB = new Promise((resolve,reject)=>{
    const css = false

    if(css){
        setTimeout(resolve,3000,"css is finised")
    }

    else{
        reject("css not completed")
    }
})

let subjectC = new Promise((resolve,reject)=>{
    const js = true

    if(js){
        setTimeout(resolve,3000,"js is finised")

    }
    else{
        reject("js not completed")
    }
})

Promise.any([subjectA,subjectB, subjectC])
.then((msg)=>console.log(msg))
.catch((msg)=>console.log(msg +" its a error"))