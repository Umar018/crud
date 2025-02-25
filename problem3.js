function countAll(str){
    let letter = str.split("").filter(el => el.toLowerCase() !== el.toUpperCase()).length
    let number = str.split("").filter(el => /\d/.test(el)).length
    
    return {
        letters: letter,
        numbers: number
    }
}

console.log(countAll("h3ll0 wor1d"))