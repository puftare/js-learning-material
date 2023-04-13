// Singleton in TypeScript

/*

Singleton is a creational design pattern, 
which ensures that only one object of its kind exists
and provides a single point of access to it for any other code.

*/

/*

Singleton has almost the same pros and cons as global variables.
Although they’re super-handy, they break the modularity of your code.

You can’t just use a class that depends on a Singleton in some other context, 
without carrying over the Singleton to the other context. 
Most of the time, this limitation comes up during the creation of unit tests.

*/

// USAGE
// Usage examples: A lot of developers consider the Singleton pattern an antipattern.
// That’s why its usage is on the decline in TypeScript code.

// IDENTIFICATION:
//  Singleton can be recognized by a static creation method, which returns the same cached object.

/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class Singleton {
  private static instance: Singleton;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {}

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public someBusinessLogic() {
    // ...
  }
}

/**
 * The client code.
 */
function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
    console.log("Singleton works, both variables contain the same instance.");
  } else {
    console.log("Singleton failed, variables contain different instances.");
  }
}

clientCode();
