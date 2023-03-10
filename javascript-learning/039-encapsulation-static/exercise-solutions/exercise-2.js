/*
    1. Given the class definitions below, predict
       what will be logged out with the code:

       class Animal {
        static knownMammals = [];
        mammal = false;
        eyes = 2;

        static isMammal() {}
        describe() {}
       }

       class Monkey extends Animal {
        static knownMonkeys = [];
        height;
        weight;

        static isCute() {}
        eatBanana() {}
       }

    2. What will this code print out:
       const animal = new Animal();
       console.log(Object.getOwnPropertyNames(animal))
       console.log(Object.getOwnPropertyNames(animal.__proto__))
       console.log(Object.getOwnPropertyNames(Animal))
       console.log(Object.getOwnPropertyNames(Animal.__proto__))

       const monkey = new Monkey();
       console.log(Object.getOwnPropertyNames(monkey))
       console.log(Object.getOwnPropertyNames(monkey.__proto__))
       console.log(Object.getOwnPropertyNames(Monkey))
       console.log(Object.getOwnPropertyNames(Monkey.__proto__))
*/

class Animal {
  static knownMammals = [];
  mammal = false;
  eyes = 2;

  //   constructor() {}

  static isMammal() {}
  describe() {}
}

class Monkey extends Animal {
  static knownMonkeys = [];
  height;
  weight;

  //   constructor() {
  //     super(); // mammal eyes
  //     // + height weight
  //   }

  static isCute() {}
  eatBanana() {}
}

const animal = new Animal();
console.log(animal.describe());
// console.log(Object.getOwnPropertyNames(animal)); // mammal, eyes
// Animal.prototype
// console.log(Object.getOwnPropertyNames(animal.__proto__)); // describe, constructor
// Animal.isMammal()
// console.log(Object.getOwnPropertyNames(Animal)); // knownAnimals, isMammal
// Function.prototype
console.log(Object.getOwnPropertyNames(Animal.__proto__)); // constructor, length, name
// console.log(Object.getOwnPropertyNames(Function.prototype));

const monkey = new Monkey();
// console.log(Object.getOwnPropertyNames(monkey)); // height, weight, ??? mammal, eyes
// Monkey.prototype
// console.log(Object.getOwnPropertyNames(monkey.__proto__)); // eatBanana, constructor
// Monkey.isCute();
// console.log(Object.getOwnPropertyNames(Monkey)); // isCute, knownMonkeys
// Function.prototype ?? Animal?
console.log(Object.getOwnPropertyNames(Monkey.__proto__)); //
console.log(Object.getOwnPropertyNames(Animal)); //
