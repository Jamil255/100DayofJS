

// // Iterative approach using bit manipulation
let array = [1, 2, 3].sort((a, b) => a - b)
let result = []
function getSubsets(array, ans, i, result) {
  if (i == array.length) {
    result.push([...ans])
    return
  }
  ans.push(array[i])
  getSubsets(array, ans, i + 1, result)

  ans.pop()

  getSubsets(array, ans, i + 1, result)
  return
}
getSubsets(array, [], 0, result)
console.log(result)

// const subSetIIFun = (array, ans, i, result) => {
//   // base_case
//   if (i == array.length) {
//     result.push([...ans])
//     return
//   }

//   // include
//   ans.push(array[i])
//   subSetIIFun(array, ans, i + 1, result)

//   // backtracking
//   ans.pop()

//   // skping the duplicate index
//   let index = i + 1
//   while (index < array.length && array[index] == array[index - 1]) index++

//   // exclude
//   return subSetIIFun(array, ans, index, result)
// }

// console.log(subSetIIFun(array, [], 0, result))
// console.log(result)
