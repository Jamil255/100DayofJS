// method used
const repeatString = (str, num) => {
  return num > 0 ? str.repeat(num) : str
}
console.log(repeatString('abc', 2))

// dynamic apporach

const rptStr = (str, num) => {
  if (num <= 0) {
    return str
  }
  let result = ''
    for (let i = 0; i < num; i++) {
      console.log(str);
    result += str
  }
  return result
}
console.log(rptStr('error', 100))
