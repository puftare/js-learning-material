var message = "meow";

try {
  //   var message = "hello";
  console.log(message);
  throw new Error("Oh no!");
} catch (err) {
  console.error(err);
  console.error(message);
}

console.log("Program complete!");

console.log(message);
