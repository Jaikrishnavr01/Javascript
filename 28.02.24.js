// // callback and callbackhell

// console.log("start");

// function LogingUser(email, password, callback){
//     setTimeout(() => {
//         callback({userEmail: email, userPassword: password});
//     }, 2000);
// }

// // Invoking LogingUser with email, password, and a callback to log user data
// LogingUser("jaikrishnavr@gmail.com", 123456789, callback => {
//     console.log(callback);
// });

// console.log("end");


// // callback hell

// function getUserVideo(email, callback) {
//     setTimeout(() => {
//         callback(["video1", "video2", "video3"]);
//     }, 2000);
// }

// // Simulating a login process and fetching user videos in a nested callback
// LogingUser("jaikrishnavr@gmail.com", 123456789, callback => {
//     getUserVideo(callback.userEmail, callback2 => {
//         console.log(callback2);
//     });
// });


// //async Await


// // async function fn(){
// //     return "hello"
// // }

// // console.log(fn())



// let subj = new Promise((resolve, reject)=>{
//     const html = true
//     if(html){
//         setTimeout(resolve,5000,"HTML is finised")
//     }

//     else{
//         reject("HTML not completed")
//     }
// })

// async function statuss(){
//     try {
//         console.log("start try")
//         res = await subj
//         console.log(res)
//         console.log("end try")
        
//     } catch (error) {
        
//         console.log(error)
//     }

// }


// // async function statuss(){
// //     console.log("start")
// //     res = await subj
// //     console.log(res)
// //     console.log("end")

// // }


// statuss()


/* ***********************api fetch************************* */

// json

const button = document.querySelector("button")
const header = document.querySelector("h1")

button.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
    .then(result => result.json())
    .then(data => {
        header.innerText = data.slip.advice
        setInterval()
    })

})

