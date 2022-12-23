const fibonacci = function(num) {
    if(num < 0)
        return "OOPS"

    num = +num;
    
    let prev = 1;
    let next = 1;
    
    let res = 0;

    if(num === 0)
        return 0

    if(num === 1 || num === 2)
        return prev;

    for (let i = 2; i < num; i++) {
        res = prev + next;
        prev = next;
        next = res;
    }

    return res;

};

// Do not edit below this line
module.exports = fibonacci;
