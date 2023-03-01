var character = {
  name: "Rick Axley",
  class: "Axe Wielder",
  quote: "I'll never let you down",
  __admin__: false,
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield "hello";
  },
};

for (var value of character) {
  console.log(value);
}
