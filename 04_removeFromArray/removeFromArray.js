const removeFromArray = function(arr, ...args) {
    let indexOf = 0;

    console.log(indexOf)
    for(const arg of args) {
        if(arr.includes(arg)) {
            indexOf = arr.indexOf(arg);
            console.log(indexOf);
            arr.splice(indexOf, 1);
            console.log(arr + "\n" + arr[indexOf]);
        }
    }

    console.log(arr + "\n" + arr[indexOf])

    return arr;
};

console.log(removeFromArray([1, 2, 3, 4, 5], 2));

// Do not edit below this line
module.exports = removeFromArray;
