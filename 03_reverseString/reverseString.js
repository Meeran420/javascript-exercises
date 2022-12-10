const reverseString = function(str) {
    let returned = "";
    for(let i = str.length; i >= 0; i--) {
        returned = returned + str.charAt(i);
    }

    return returned;
};

// Do not edit below this line
module.exports = reverseString;
