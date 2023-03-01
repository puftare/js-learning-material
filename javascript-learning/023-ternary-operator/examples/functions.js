var happyCheck = (happy) => {
  if (happy === true) {
    return "Yay!";
  } else {
    return "Nope";
  }
};

var result1 = happyCheck(true);
var result2 = happyCheck(false);

console.log(result1, result2);

var happyCheck2 = (happy) => {
  // return "Yay!"
  // return "Nope"
  return happy === true ? "Yay!" : "Nope";
};

var result3 = happyCheck2(true);
var result4 = happyCheck2(false);

console.log(result3, result4);

var happyCheck3 = (happy) => (happy === true ? "Yay!" : "Nope");

var result5 = happyCheck3(true);
var result6 = happyCheck3(false);

console.log(result5, result6);
