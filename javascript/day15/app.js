recursive function

const fact = (n) => {
    if (n === 0) {
        return 1

    }

    return n * fact(n - 1)
}

console.log(fact(3));

const sumOfSquare = (arra) => {
    return arra.reduce((acc, curElem) =>  acc + curElem * curElem, 0)
}
console.log(sumOfSquare([1, 2, 3]));


const sumOfSquare = (array) => {
    return array.reduce((acc,curElem)=>acc+curElem*curElem,0)
}

console.log(sumOfSquare([1, 2, 3]))
