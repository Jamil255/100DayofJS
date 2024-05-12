//  repeat day 24
const repeatStr = (str, num) => {
  return num > 0 ? str.repeat(num) : str
}

console.log(repeatStr('jamil', 2))

const repeatStr = (str, num) => {
  let repeat = ''
  for (let i = 0; i <= num; i++) {
    repeat += str
  }
  return repeat
}
console.log(repeatStr('jamil',3));

// day 25
const rangeNumber = (a, b) => {
  let temp = []
  while (a < b) {
    temp.push(a)
    a++
  }
  return temp
}

console.log(rangeNumber(2, 8))


// recursive function


const rangeNumber = (a, b, result = []) => {
    if (a >= b) {
      return result;
    }
  
    result.push(a);
    return rangeNumber(a + 1, b, result);
  }
  
  console.log(rangeNumber(2, 8));
  
