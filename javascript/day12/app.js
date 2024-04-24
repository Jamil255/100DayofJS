// array contain duplicate number is remove

const removeDuplicates = (Array) => {

    let newArr = [...new Set(Array)]
    return newArr


}

console.log(removeDuplicates([1, 1, 2, 3, 4, 5, 6, 7, 6, 2]));