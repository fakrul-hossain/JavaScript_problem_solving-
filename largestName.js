/* 
 alexis

 sixelA
*/


/* let nameOne = 'John'
let nameTwo = 'Alexis'

let friendOneLength = nameOne.length
let friendTwoLength = nameTwo.length

if ( friendOneLength > friendTwoLength) {
    console.log(nameOne.split("").reverse().join(""));
    
}
else{
    console.log(nameTwo.split("").reverse().join(""));
    
} */

let nameOne = 'John'
let nameTwo = 'Alexis'

function reverseName(nameOne, nameTwo) {

let friendOneLength = nameOne.length
let friendTwoLength = nameTwo.length

if ( friendOneLength > friendTwoLength) {
    return(nameOne.split("").reverse().join(""));
    
}
else{
    return(nameTwo.split("").reverse().join(""));
    
}
}

const result = reverseName(nameOne, nameTwo)

console.log(result);