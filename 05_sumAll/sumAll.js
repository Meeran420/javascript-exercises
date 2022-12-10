const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0 || typeof(num1) != "number" || typeof(num2) != "number")
        return 'ERROR';

    let sum = 0;

    let min = num1 < num2 ? num1 : num2;
    let max = num1 > num2 ? num1 : num2;

    for(let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

console.log(sumAll(10, "90"));

// Do not edit below this line
module.exports = sumAll;
