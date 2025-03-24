const hobbies = require("./hobbies")
const names = require("./names")

function schedule(){
    return{
    names : names('Enrico', 'Ciccolini'),
    hobbies : hobbies('mangiare', 'studiare', 'dormire')
    }
}

console.log(schedule())