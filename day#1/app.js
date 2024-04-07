  
// find the findlongest string 

const findlongest = (input) => {
    if (input.trim().length===0) {
        return false;
   }
   let words = input.split(" ")
   // words.sort((a, b) => a.length - b.length)
   // return words.at(-1)

   words.sort((a, b) => b.length - a.length)
   return words[0]
}

const result = findlongest("my name is jamil")
console.log(result);