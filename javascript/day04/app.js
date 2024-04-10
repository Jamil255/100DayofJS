
const checkTriangleType = (a, b, c) => {
    if (a === b && b === c) {
        console.log("equalitor ");
    } else if (a === b && b !== c) {
        console.log("isosoclne");
    } else {
        console.log("sacalnce");
    }
    return
}

const result = checkTriangleType(1, 2, 3)
