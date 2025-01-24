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

const sumOfArray=(array)=>{
const dp=new Array(array.length) 
    dp[0]=array[0]

for(let i=0;i<array.length;i++){
    dp[i]=dp[i-1]+array[i]
}
    return dp[array.length-1]
}
console.log(sumOfArray([1,2,3,4,5,6]))






}
