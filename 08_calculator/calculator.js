const add = function(a, b) {
  return +a + +b;
};

const subtract = function(a, b) {
	return +a - +b;
};

const sum = function(nums) {
	let sum = 0;
  for(let num in nums) {
    sum += nums[num];
    console.log(num)
  }
  return sum;
};

const multiply = function(nums) {
  let sum = 1;
  for(let num in nums) {
    sum *= nums[num];
    console.log(num)
  }
  return sum;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
