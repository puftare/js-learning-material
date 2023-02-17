var characters = ["Frodo", "Harry", "Thanos", "Gandalf", "Yoda"];

for (var i = 0; i < characters.length; i++) {
  //   characters[i] = characters[i].toUpperCase();
  //   console.log(characters[i + 1]);
}

console.log(characters);
console.log("-----");

for (var character of characters) {
  console.log(character);
  character = character.toUpperCase();
  console.log(character);
}

console.log(characters);
