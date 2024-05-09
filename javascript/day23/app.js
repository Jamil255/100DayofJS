// const fact = (num) => {
//   let factorial = 1
//   for (let i = 1; i <= num; i++) {
//     factorial = factorial * i
//   }
//   return factorial
// }

// console.log(fact(5))

// const fact = (num) => {
//   if (num === 0) {
//     return 1
//   }

//   return num * fact(num - 1)
// }
// console.log(fact(5))

// fibonacci serires

const fibonacci = (num) => {
  if (num <= 1) {
    return num
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(5))