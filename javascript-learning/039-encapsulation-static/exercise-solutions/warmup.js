/*
    1. Create a class called "Printer" that has a constructor
       that takes two parameters:
       - brand (String)
       - colours (Array of Strings)
       *Don't set these to the "this" value yet

    2. Create a PRIVATE method called "setupPrinter" that takes
       the same two parameters as the constructor (brand, colours)
    
    3. This method will assign the brand and colours to the "this"
       Object inside the class (the instance of the class)

    4. Call the "setupPrinter" function from inside the constructor

    5. Create a new instance of Printer and see if the brand and
       colours got set correctly

    Example:
       class Printer {...}
       const printer = new Printer("HP", ["Red", "Green", "Blue"]);
       console.log( printer.brand, printer.colours )
       // HP ["Red", "Green", "Blue"]
*/

class Printer {
  #privateVar;
  constructor(brand, colours, prvt) {
    this.#setupPrinter(brand, colours, prvt);
  }

  #setupPrinter(brand, colours, prvt) {
    this.brand = brand;
    this.colours = colours;
    this.#privateVar = prvt;
  }

  #print() {
    console.log(this.#privateVar);
  }

  tellMe() {
    this.#print();
  }
}

const printer = new Printer("HP", ["Red", "Green", "Blue"], 15);
console.log(printer.brand, printer.colours, printer);
printer.tellMe();
// HP ["Red", "Green", "Blue"]
