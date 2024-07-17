const add = () => {
  console.log('welcome add called')
  localStorage.setItem('welcome', 'welcome')
  localStorage.setItem('img', 'welcome')
}
add()

const removeDuplicates = (array) => {
  console.log(array)
    return new Set(array)
}
console.log(removeDuplicates([1,22,3,4,2,1,3,4,5,]));
// removeDuplicates
