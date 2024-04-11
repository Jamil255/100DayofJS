//  question : write a  function to sort an array of number in the asceding order

const sortArr = (arry) => {
    console.log(arry);
    // return arry.sort()
    return arry.sort((a,b)=>a-b)
    
}
console.log(sortArr([1,9,8,4,5,7,3,4,10]));