const calAvg = (arr) => {
    let total = arr.reduce((acc, cur) => acc + cur);
    return total / arr.length
}
const result = calAvg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(result);



const RevserString = (str) => {
    str = str.split("").reverse().join("")
    console.log(str);
}
console.log(RevserString("jamil afzal"));