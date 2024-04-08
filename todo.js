// const button = document.querySelector("#submit");

// const TodoNr = document.querySelector(".todo-nr b");

// const TodoList = document.querySelector("#todo-list");

// const list = TodoList.children;
// // console.log(list)

// button.addEventListener('click', function () {
// const newItem = document.createElement('li');
// newItem.classList.add('item');
// newItem.innerText = `item-${list.length + 1}`;
// TodoList.appendChild(newItem);

// TodoNr.innerText = list.length;
// })

/* *************************add-css************************** */

// const button = document.querySelector("#submit");

// const TodoNr = document.querySelector(".todo-nr b");

// const TodoList = document.querySelector("#todo-list");

// const mainTitle = document.querySelector(".main-title");

// button.addEventListener("click", function(event) {

//     if (event.keycode === 80) {

//     }
//     // mainTitle.style.color ="red";
//     // mainTitle.style.fontSize = '60px';

//     mainTitle.classList.toggle('awesome');
    

// });


// localStorage.setItem('Task', true) // only two value are accepted
// localStorage.setItem('Task', '123 is string') // string should be in double quouts
// localStorage.setItem('Task', 123 )


// Assume we have an array
let myArray = [123 , 'hjd', 'dfd']

// localStorage.setItem(arr);

// Assume we have an object
// const myArray = {'number' : '123456',
// 'name' : 'xxxx',
// 'address' : 'abcd'
// };

let x = localStorage.setItem('myArray', JSON.stringify(myArray));

const storedArray = JSON.parse(localStorage.getItem('myArray'));

console.log(typeof storedArray);
console.log(Array.isArray(storedArray))


// Storing data in sessionStorage
sessionStorage.setItem('key', 'value');

// Retrieving data from sessionStorage
// const value = sessionStorage.getItem('key');
// console.log(value); // Output: value

// // Removing data from sessionStorage
// sessionStorage.removeItem('key');

// // Clearing all data from sessionStorage
// sessionStorage.clear();

