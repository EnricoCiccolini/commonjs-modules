const hobbies = require("./hobbies")
const names = require("./names")

function schedule(){
    return{
    fullName : names('Enrico', 'Ciccolini'),
    hobbies : hobbies('mangiare', 'studiare', 'dormire')
    }
}

console.log(schedule())