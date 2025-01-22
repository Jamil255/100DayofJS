function isSecondHeight(arr) {
  if (arr.length < 2) {
    return false
  }
  let hightest = -Infinity
  let secondHightest = -Infinity
  for (let num of arr) {
    if (num > hightest) {
      secondHightest = hightest
      hightest = num
    } else if (num < secondHightest && num > hightest) {
      secondHightest = num
    }
  }
  return secondHightest
}

console.log(isSecondHeight([1, 3, 4, 5, 6, 9]))
