// Question :hash   tag generator
let tempArr = []
const generatorHash = (str) => {
    if (str.length > 280 || str.trim().length === 0) {
        return false;
    }
    let splitStr = str.split(" ")
    console.log(splitStr);
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === "" || splitStr[i] === "  ") {
            continue
        }
        var words = splitStr[i]
        console.log(words);

        var concatStr = words[0].toUpperCase() + words.slice(1).toLowerCase()
        console.log(concatStr);

        tempArr.push(concatStr)
        console.log(tempArr);

    }

    var result = "#" + tempArr.join("")
    console.log(result);

}
const result = generatorHash("hello woLdG   "); 