/* 
1* 3 = 3 
2* 3 = 6 
3* 3 = 9 
4* 3 = 12 
5* 3 = 15 
6* 3 = 18 
7* 3 = 21 
8* 3 = 24 
9* 3 = 27 
10* 3 = 30 
*/

let num1 = 1;
let num2 = 2;
let product = num1 * num2; 
let sum = 3;

for (let i = 1; i <= 10; i++) {
    
    // console.log(i * sum);
    
}

// namata 
/* let namata = 13;

for (let i = 1; i <= 10; i++) {
    console.log(i * namata);
    
} */
let namataOF = 11;

function namata(number) {
    for (let i = 1; i <= 10; i++){
        console.log(i + ' * ' + namataOF + ' = ' + i * number);
    }
}
const number = 11;


namata(number);