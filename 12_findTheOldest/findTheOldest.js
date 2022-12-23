const findTheOldest = function(arr) {
    let oldestAge = 0;
    let currentAge = 0;
    let res = 0;

    for (const i in arr) {
        if(!arr[i]['yearOfDeath']) {
            arr[i]['yearOfDeath'] = (new Date).getFullYear();
        }

        currentAge = arr[i]['yearOfDeath'] - arr[i]['yearOfBirth'];

        if(currentAge > oldestAge) {
            oldestAge = currentAge;
            res = i;
        }
    }

    return arr[res];
};

// Do not edit below this line
module.exports = findTheOldest;
