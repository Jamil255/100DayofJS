// const sumOfDigits = (num) => {

//     let array = Array.from(String(num), Number)
//     return array.reduce((accc, value) => accc += value, 0)

// }
// console.log(sumOfDigits(1234));


const sumOfDigits = (num) => {
    let arr = Array.from(String(num), Number)
    return arr.reduce((acc,curElm)=>acc+=curElm)
}
console.log(sumOfDigits(1234));


// alternative

const sumOfDigits = (num) => {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
};

console.log(sumOfDigits(1234)); // Example usage


