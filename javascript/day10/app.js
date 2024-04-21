
// use every method 
const arrayAreEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }
    return arr1.every((curVal, index) => curVal === arr2[index])
}

console.log(arrayAreEqual([1, 2], [1, 2]));

// with dynamic programming to optimize the arrayAreEqual function:

const arrayAreEqual = (arr1, arr2, memo = new Map()) => {
    const key = arr1.toString() + "|" + arr2.toString();
    if (memo.has(key)) {
        return memo.get(key);
    }

    if (arr1.length !== arr2.length) {
        memo.set(key, false);
        return false;
    }

    const isEqual = arr1.every((curVal, index) => {
        if (Array.isArray(curVal) && Array.isArray(arr2[index])) {
            return arrayAreEqual(curVal, arr2[index], memo);
        } else {
            return curVal === arr2[index];
        }
    });

    memo.set(key, isEqual);
    return isEqual;
};

console.log(arrayAreEqual([1, 2], [1, 2])); // Output: true
