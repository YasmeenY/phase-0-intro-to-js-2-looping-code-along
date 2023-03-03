// Code your solutions in this file
function writeCards(names, event){
    let inames = []
    for (let i = 0; i < names.length; i++ ){
        inames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return inames
};

function countDown(number){
    while (number >= 0){
        console.log(number--)
    }
};