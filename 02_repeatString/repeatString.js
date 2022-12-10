const repeatString = function(str, num) {
    if(num < 0)
        return 'ERROR';
    
    let adding = str;
    let returned = "";
    for(let i = 0; i < num; i++) {
        returned = returned + adding;
    }

    return returned;
};

// Do not edit below this line
module.exports = repeatString;
