// repeat  day27
const numberHex = () => {
  return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`
}
console.log(numberHex())

const removeDuplicates = (array) => {
  //   return new Set(array)
  let temArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i]) {
      temArray.push(array[i])
    }
  }
  return temArray
}
console.log(removeDuplicates([1, 1, 22, 33, 22, 34, 90, 90]))

var removeDuplicates = (array) => {
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!tempArray.includes(array[i])) {
        tempArray.push(array[i]);
      }
    }
    return tempArray;
  }
  
  console.log(removeDuplicates([1, 1, 22, 33, 22, 34, 90, 90]));
  
