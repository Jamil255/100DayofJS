const isMissingNumber = (array) => {
    const n = array.length + 1;
    const sum = n * (n + 1) / 2;
    const total = array.reduce((acc, curr) => acc + curr, 0);
    return sum - total;
}
console.log(isMissingNumber([1, 2, 3, 4, 6, 7, 8]));