//  pervious topics repeat throughout
const isCamelCase = (str) => {
    str = str.split(" ")
    str = str.map((curEle, index) => {
        console.log("ele", curEle, "index", index);
        if (index === 0) {
            return curEle.toLowerCase()
        }
        else {
            return curEle.charAt(0).toUpperCase() + curEle.slice(1).toLowerCase()
        }
    })
    return str.join("")
}
console.log(isCamelCase("JAmil afzal"));

// day19

const isUppercase = (str)=>{
    return str === str.toUpperCase()
}
console.log(isUppercase("j"));

startWith

const startWith = (str, subStr) => {
    return str.startsWith(subStr)
}
console.log(startWith("jamil afzal", "jamil"));
console.log(startWith("adeel afzal", "adeel"));
console.log(startWith("ahamd awan "))
