let numberList =
[-1,2,-3,4,5,6,-7,8,-9,10,11]

 
/* for (let i = 0; i < numberList.length; i++) {
    const element = numberList[i];
    // console.log(element);

    if (element >5) {
        // console.log("yes");
        count = count +1;
    }
    else {
        // console.log('No');
    }
}

console.log(count); */

function bigNumberOfArray(numberList) {
    let count = 0;
    for (let i = 0; i < numberList.length; i++) {
        const element = numberList[i];
        if (element>5) {
            count = count + 1;
        }
    }
    return count;
}

const result = bigNumberOfArray(numberList)
console.log(result);