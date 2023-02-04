function radianToDegree(radian) {
    if (typeof radian != 'number') {
        return 'Please Valid Input'
    }

    const PI = 3.14159265359
    const degree = (radian * (180/PI)).toFixed(2)
    return degree;
}

let result = radianToDegree(12);

console.log(result);