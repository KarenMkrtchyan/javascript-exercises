const add = function( ...nums) {
	let result=0;
  for(num of nums){
    result += num;
  }
  return result;
}

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(nums) {
 return nums.reduce((a,b)=>(a+b),0);
};

const multiply = function(nums) {
  return nums.reduce((accumelator, currentValue)=>(accumelator*currentValue), 1);
};

const power = function(base, power) {
  let result=1;
	for(let i=0;i<power;i++){
    result *= base;
  }
  return result;
};

const factorial = function(num) {
  let result=1;
	for(let i=num; i>0;i--){
    result *=i;
  }
  return result
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
