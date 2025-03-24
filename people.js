const hobbies = require("./hobbies")
const names = require("./names")
console.log(hobbies)

function schedule(){
    return{
    names,
    hobbies
    }
}

console.log(schedule())