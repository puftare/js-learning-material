var sentence = "There once was a monkey who knew Javascript...";

var pattern = /\.\.\./;

var test = pattern.test(sentence);
console.log(test);

var match = sentence.match(pattern);
console.log(match);
