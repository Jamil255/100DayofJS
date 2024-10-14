// console.log('   adding')

const fact = (number) => {
  if (number ==0) {
    return 1
  }
  return number * fact(number - 1)
}
const funCall = fact(5)
console.log(funCall)
