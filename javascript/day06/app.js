const ispalindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g, "");
    console.log(str);
    let r_str = str.split("").reverse().join("")
    return r_str === str ? true : false
}
console.log(ispalindrome("deified"));


let palindrome = ["repaper", "deed", "peep", "wow", "noon"]