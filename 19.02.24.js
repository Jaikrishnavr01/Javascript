//global execution content

// when browser starts it will starts with global exection 

// 1. Global Object
// 2. This




/*names() // hoistimg

function names() {
    let name = 'suria'
    console.log(name)
}*/


/* *******************function expression********************* */

/*const getRectArea = function (width, height) {
    return width * height;
  };
  
  console.log(getRectArea(3, 4));*/



//    1. rules


//    console.log(cakes);
//    var cakes =  "cakes";




/*function sayHi() {
    console.log(`Hello There ${name}`)

    changeName();

    console.log('sayHi is finised')
}


function changeName(){
name = "jai"
console.log(`we cahnge it to same ${name}`)
console.log(`changename to finshed `)
}


let name = "krishna"

sayHi();
q
console.log("we are done with this code")*/



// function called by in a fuction is called  recursion 

 // function in side object is called methods


/* const user = {
    name: 'jai',
    sayHi: function(){
        console.log(this)  
     } 
    }

    user.sayHi();*/



    /*const list  = document.querySelectorAll("li")

    list.forEach(function(li){
        li.addEventListener('click' , function(){
            console.log(this)
        })

        
    });

    console.log(this)*/


    const user= {
        name: "jai",
        videos: ['html','css', 'javascript', 'react' ],
        greet(){
            console.log('hello this is a');

           function greet1(){
                console.log('hello this is a '+ this.name)
            }
        }
    }



    user.greet()