// write a function called isPowerOfTwo that takes an integer num as input abd return true if num is a power of two abd false otherwise


const isPowerOfTwo = (num) => {
    let opt=false
for (let i = 1; i <num; i++) {
    if (2*i===num) {
        opt = true
    }
    }
    return opt

}

console.log(isPowerOfTwo(16));


// day13 revision

const countVowels = (str) => {
    let vowels = ["a", "e", "i", "o", "u"] 
    let arr=str.split("")
    let count=0
    for (const char of arr) {
        if (vowels.includes(char.toLowerCase())) {
        count++
        
    }
    }
    return count

}

console.log(countVowels("adeel afzal mughal"));