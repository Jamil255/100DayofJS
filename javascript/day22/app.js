const number = [1, 2, 2, 3, 1, 4, 2]
let count = {}

for (const key of number) {
count[key]=(count[key]||0) + 1
}

console.log(count);


const fact = (num) => {
    if (num === 0) {
        return 1
    }
   return  num*fact(num-1)
}

console.log(fact(4));