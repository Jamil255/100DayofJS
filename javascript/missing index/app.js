// const isMissingNumber = (array) => {
//     const n = array.length + 1;
//     const sum = n * (n + 1) / 2;
//     const total = array.reduce((acc, curr) => acc + curr, 0);
//     return sum - total;
// }
// console.log(isMissingNumber([1, 2, 3, 4, 6, 7, 8]));

const isSumOfArray = (array) => {
    const dp = new Array(array.length);
    dp[0] = array[0];
    for (let i = 1; i < array.length; i++){
        dp[i] = dp[i - 1] + array[i];
    }
    console.log(dp)
    return dp[array.length-1]
}
console.log(isSumOfArray([1, 2, 3, 4, 6, 7, 8]));