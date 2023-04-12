// Singletons are classes which can be instantiated once, and can be accessed globally.
// This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.

// First, let's take a look at what a singleton can look like using an ES2015 class.
// For this example, we're going to build a Counter class that has:

// a getInstance method that returns the value of the instance
// a getCount method that returns the current value of the counter variable
// an increment method that increments the value of counter by one
// a decrement method that decrements the value of counter by one

/*
// Uncomment the code for results
let counter = 0;

class Counter {
  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}
*/

// However, this class doesn't meet the criteria for a Singleton!
// A Singleton should only be able to get instantiated once.
// Currently, we can create multiple instances of the Counter class.

/*
// Uncomment the code for results
const counter1 = new Counter();
const counter2 = new Counter();

console.log(counter1.getInstance() === counter2.getInstance());
*/

// By calling the new method twice, we just set counter1 and counter2 equal to different instances.
// The values returned by the getInstance method on counter1 and counter2 effectively returned references to different instances:
// they aren't strictly equal!

// Let's make sure that only one instance of the Counter class can be created.

// One way to make sure that only one instance can be created, is by creating a variable called instance.
// In the constructor of Counter, we can set instance equal to a reference to the instance when a new instance is created.
// We can prevent new instantiations by checking if the instance variable already had a value.
// If that's the case, an instance already exists.
// This shouldn't happen: an error should get thrown to let the user know

/*
// Uncomment the code for results
let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const counter1 = new Counter();
const counter2 = new Counter(); // Error: You can only create one instance!
*/

// Perfect! We aren't able to create multiple instances anymore.

// Let's export the Counter instance from the counter.js file.
// But before doing so, we should freeze the instance as well.
// The Object.freeze method makes sure that consuming code cannot modify the Singleton.
// Properties on the frozen instance cannot be added or modified, which reduces the risk of accidentally overwriting the values on the Singleton.

let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
