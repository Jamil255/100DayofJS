const countChar = (word, char) => {
    word = word.toLowerCase();
    char = char.toLowerCase()
    totalCount = word.split("").reduce((accum, curChar) => {
        if (curChar === char) {
            accum++
        }
        return accum;
    }, 0)
    return totalCount;
}

const isFact=(num)=>{
    if(num===0)return 0
    return num*isFact(num-1)
}

console.log(isFact(7))
console.log(countChar("allkkkklllllllli", "l"));
