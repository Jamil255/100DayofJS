const isPascalCase = (str) => {
    let strSplit = str.split(" ")
    let temp = []
    for (let i = 0; i < strSplit.length; i++) {
        let words = strSplit[i]
        let wordsSplit = words[0].toLowerCase() + words.slice(1).toLowerCase()
        temp.push(wordsSplit)

    }
    let result = temp.join("")
    return result
}

console.log(isPascalCase("jamil afzal"));
console.log(isPascalCase("AdeeL aFZal"));
