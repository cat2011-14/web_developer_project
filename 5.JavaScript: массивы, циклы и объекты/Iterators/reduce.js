const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator,currentValue)=>{
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return currentValue+accumulator;
},10);

console.log(newSum);
