// // reapet day 26
// const rangeNumberGen = (a, b, arr = []) => {
//   if (a <= b) {
//     arr.push(a)
//     return rangeNumberGen(a + 1, b, arr)
//   }
console.log(arr)
//   return arr
// }
// console.log(rangeNumberGen(0, 10))

const randomHexColor = () => {
    return `${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
}

console.log(randomHexColor());
