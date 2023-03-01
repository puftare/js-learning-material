var countryPop = {
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
};

console.log(countryPop);

var countryPopExtended = {};
for (var entry of Object.entries(countryPop)) {
  var country = entry[0];
  var pop = entry[1];
  countryPopExtended[country] = pop;
}
countryPopExtended["Indonesia"] = 273;
countryPopExtended["Japan"] = 125;

var countryPopExtended2 = {
  ...countryPop,
  Indonesia: 273,
  Japan: 125,
};

console.log(countryPopExtended);
