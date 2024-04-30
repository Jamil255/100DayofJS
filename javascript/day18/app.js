const isCamelCase = (str) => {
    str = str.split(" ")

    str = str.map((curElem, index) => {
        if (index === 0) {
            return curElem.toLowerCase()
        } else {
            return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
        }
    })
    return str.join('')
}
console.log(isCamelCase("Jamil afzal"));