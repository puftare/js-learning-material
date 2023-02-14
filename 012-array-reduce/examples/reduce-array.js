var nums = [5, 10, 15, 20, 25, 30, 35];

var reduced = nums.reduce((result, num) => {
  console.log(result, num);
  result.push(num);

  return result;
}, []);

console.log(reduced);
