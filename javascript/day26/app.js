const numberRangeRecursive = (a, b, arr = []) => {
  if (a <= b) {
    arr.push(a)
    return numberRangeRecursive(a + 1, b, arr)
    }
    return arr
}
console.log(numberRangeRecursive(2,5));
console.log(numberRangeRecursive(2,10));
console.log(numberRangeRecursive(10,100))
