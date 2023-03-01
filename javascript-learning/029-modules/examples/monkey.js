var monkey = {
  name: "Abu",
  species: "Capuchin",
  hobbies: ["stealing"],
  age: 10,
};

var tiger = "Rajah";

var printMonkey = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      monkey.age++;
      console.log(monkey);
      resolve(monkey);
    }, 2000);
  });
};

console.log("hello????");

var awaitedMonkey = await printMonkey();

export { awaitedMonkey };
export default printMonkey;
