// // let d = document.getelementById("desination")

// // for(i=0 ; i<10; i++){
// //     // for(j = 0; j<10; j++){
// //     //     console.log(i,j)
// //     // }
// //     for(j = i; j>0; j--){
// //         // console.log(i,j)
// //         d.append(j+" ");
// //     }

// //     let br = document.createElement("br")

// //     d.appendChild(br)
// // }







// /*****Regular expressions******/

// // used for for  patten matching or string 

// // Eg:
//     //   [abc] = a,b or c
//     // [^abc] = anything but not a, b or c
// // [a-z] = any lowercase letter
// // [A-Z] = Any uppercase letter
// // [a-z, A-Z] = either of the letters in between

// // quantifiers

// // []? - means zero or one occurrence
// // []* - means zero to many occurrences
// // []+ - means one to many occurrences
// // [] {n} - n is a number , it will match that number of characters only
// // [] {y-z} - y and z can be any character , it should be lessthan z times


// //Meta Characters:

// // \d = [0-9]
// // \D =  [^0-9]
// // \W = [a-z A-Z_0-9]

// <!--Example: Mobile number starts with 8 or 9  and total digits = 10

// first charater uppercase, contains lowercase alphates, only one digits are allowed in lowercase

// email id "eg@gmail.com" (_-.)
// -->


// // [89] [0-9] {9}
// // [A-Z] [a-z] * [0-9][a-z]*
// // [a-z A-Z 0-9* _\ -\ .\] +[@]






//cookies

document.cookie = "name=ajai".toUTCstring()

