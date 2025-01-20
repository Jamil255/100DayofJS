  
// find the findlongest string 

const findlongest = (input) => {
    if (input.trim().length===0) {
        return false;
   }
   let words = input.split(" ")
   // words.sort((a, b) => a.length - b.length)
   // return words.at(-1)

    words.sort((a, b) => b.length - a.length)
   return words[0]
}

const result = findlongest("my name is jamil")
console.log(result);


// prime Number

// const isPrimeNumber = (num) => {
//   if (num <= 1) return false
//   for (let i = 2; i < num; i++) {
//     if (num % 2 === 0) {
//       return false
//     }
//   }
//   return true
// }

// console.log(isPrimeNumber(4))

// const isPalindrome = (str)=>{
//     let start = 0
//     let end=str.length-1
//     while (start < end) {
//         if (str[start] !== str[end]) {
//             return false
//         }
//         start++
//         end--
//     }

//     return true
// }
// console.log(isPalindrome("madam"))

// const reverseStr = (str) => {
//     let reverse = ''
//     for (let i = str.length - 1; i >= 0; i--){
//         reverse+=str[i]
//     }
//     return reverse
// }

// console.log(reverseStr("hello"))

// const reverseArray = (array) => {
//     for (let i = 0; i < Math.floor(array.length / 2); i++){
//         const temp = array[i]
//         array[i] = array[array.length - 1 - i]
//         array[array.length - 1 - i] = temp
//     }
//     return array
// }

// console.log(reverseArray([1,2,3,4,5,6,7]))

// const findLargestNumber = (array) => {
//     let largestNumber = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > largestNumber) {
//            largestNumber = array[i]
//         }
//     }
//     return largestNumber
// }
// console.log(findLargestNumber([1,2,3,100]))

// const mergeSort = (array) => {
//   if (array.length <= 1) return array
//   const mid = Math.floor(array.length / 2)
//   const left = mergeSort(array.slice(0, mid))
//   const right = mergeSort(array.slice(mid))
//   return merge(left, right)
// }

// const merge = (left, right) => {
//   let sorted = []
//   while (left.length && right.length) {
//       if (left[0] < right[0]) {
//         sorted.push(left.shift())
//       } else {
//           sorted.push(right.shift())
//     }
//     }
//     return [...sorted,...left,...right]
// }

// console.log(mergeSort([1,10,3,9,5,6,]))



// const duplicates = (array) => {
//     if (array.length <= 1) return array
//     const seen = {}
//     const uniqueArray = []
//     for (const num of array ) {
//         if (!seen[num]) {
//             uniqueArray.push(num)
//             seen[num] = true
//         }
//     }
//     return uniqueArray
// }

// console.log(duplicates([1,1,22,3,4,4,5,6,7,8,8]))
