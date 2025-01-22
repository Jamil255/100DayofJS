function findFrequency(str) {
    let frequency = {}
    for (const char of str) {
        if (frequency[char]) {
            // console.log(char)
            frequency[char]++
            // console.log(frequency[char])
            return
        } else {
            frequency[char] = 1
            console.log(frequency[char] = 1)
        }
    }
    return frequency
}
 
console.log(findFrequency('hello'))