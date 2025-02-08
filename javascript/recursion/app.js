const allNumberprint = (n) => {
  if (n == 1) return n
  console.log(n)
  return allNumberprint(n - 1)
}

// console.log(allNumberprint(8))

const fact = (n) => {
  if (n == 0) return 1
  return n * fact(n - 1)
}
//
// time and space complexity 0(n)

// console.log(fact(5))

const sumOfNumber = (n) => {
  if (n == 1) return n
  return n + sumOfNumber(n - 1)
}

// console.log(sumOfNumber(4))

// time and space complexity is 0(n)

const fibnoacci = (n) => {
  if (n == 0 || n == 1) return n
  return fibnoacci(n - 1) + fibnoacci(n - 2)
}

// console.log(fibnoacci(10))
// time and space complexity 0(2^n),0(n)

const isSorted = (array, n) => {
  // baseCase
  if (n == 1||n==0) return true
  return array[n - 1] >= array[n - 2] && isSorted(array, n - 1)
}
// console.log(isSorted([1, 2, 3, 4, 5], 5))
// time and space complexity is 0(n)
