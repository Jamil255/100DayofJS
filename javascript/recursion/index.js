const fact = (n) => {
  // base_case
  if (n == 0) return 1
  return n * fact(n - 1)
}

// console.log(fact(3))

const sumOfNumber = (n) => {
  //    base_case
  if (n == 1) return 1
  return n + sumOfNumber(n - 1)
}

// console.log(sumOfNumber(5))

const fibonacciSeries = (n) => {
    if(n==0||n==1)return n
    return fibonacciSeries(n-1)+fibonacciSeries(n-2)

}

console.log(fibonacciSeries(3))
