// const isMean = (Array) => {
//   if (Array === 0) {
//     return 0
//   }
//   sum = Array.reduce((accu, cur) => accu + cur)
//   return sum / Array.length
// }
// console.log(isMean([1,2,3,4,5,6]));

// day 20

const strReverse = (str) => {
  let sum = ''
  for (let i = str.length - 1; i > 0; i--) {
    sum = sum + str[i]
  }
  return sum
}

console.log(strReverse('jamil afzal'))
