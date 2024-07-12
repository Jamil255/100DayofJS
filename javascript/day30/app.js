// const romevoDuplicates = (array) => {
//   return new Set(array)
// }
// console.log(romevoDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]))

// const isEmptyObject = (obj) => {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       return `it is not empty ${key}`
//     }
//   }
//   return `it is empty`
// }
// console.log(isEmptyObject({}))
// console.log(isEmptyObject({ name: 'jamil afzal' }))
// console.log(isEmptyObject({}))
// console.log(isEmptyObject({ name: 'adeel afzal' }))

// const isEmptyObject = (obj) => {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       console.log(key)
//       return `it is not empty`
//     }
//   }
//   return `it is  empty`
// }

// console.log(isEmptyObject({}))
// console.log(isEmptyObject({ age: 12, name: 'John' }))
// console.log(isEmptyObject({}))
// console.log(isEmptyObject({ age: 120 }))

// dynamic approach

const isEmptyObject = (obj) => {
    if (Object.keys(obj).length === 0) {
      return `it is empty`;
    } else {
      console.log(Object.keys(obj)[0]);
        console.log(Object)
      return `it is not empty`;
    }
  }
  
  console.log(isEmptyObject({})); // Output: it is empty
  console.log(isEmptyObject({ age: 12, name: 'John' })); // Output: age \n it is not empty
  console.log(isEmptyObject({})); // Output: it is empty
  console.log(isEmptyObject({ age: 120 })); // Output: age \n it is not empty
  
