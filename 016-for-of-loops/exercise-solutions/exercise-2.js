/*
    1. Create an empty Set called "names"

    2. Create another empty Set called "capsNames"

    2. Add the following names to the set "names":
        - Bilbo
        - Hermione
        - Spock
        - Leia

    3. Use a for-of loop to loop over "names" and
       adds the capitalized version of each name
       to the "capsNames" set

    4. Print out "capsNames"
*/

var names = new Set();
var capsNames = new Set();

names.add("Bilbo");
names.add("Hermione");
names.add("Spock");
names.add("Leia");

for (var name of names) {
  capsNames.add(name.toUpperCase());
}

console.log(capsNames);
