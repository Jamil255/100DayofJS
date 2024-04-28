const findMin = (arr) => {
    arr = arr.sort((a, b) => {
        if (b>a) {
            return -1
        }
    })
    return arr[0]
}
console.log(findMin([2, 4, 1, 3, 7, 5]));