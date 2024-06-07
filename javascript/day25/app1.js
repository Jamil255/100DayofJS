const sumOfEvens = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  
  // Example usage:
  const numbers = [1, 1, 3, 1, 5, 3];
const numbers=[23,445,6677,77]
  console.log(sumOfEvens(numbers)); // This will output: 12
  
