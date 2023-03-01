/*
    1. Create a variable "book" that points at this Object:
       { name: "1984", author: "George Orwell", year: 1949,
         rating: 4.6, genre: "Science Fiction", movie: true }

    2. Create a Symbol.asyncIterator property on "book" that
       will allow you to loop over it using a for-await-of-loop
       that will give you back the key-value pairs each loop but
       delayed by 1 second each as a paired array 
       (similar to a Map): ["name", "1984"] ["rating", 4.6]

    3. Test your loop with a for-await-of-loop to make sure it works

    HINT: An async generator function is the easiest way to do this
*/

var book = {
  name: "1984",
  author: "George Orwell",
  year: 1949,
  rating: 4.6,
  genre: "Science Fiction",
  movie: true,
};

book[Symbol.asyncIterator] = async function* () {
  var entries = Object.entries(book);
  for (var entry of entries) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(entry); // ["name", "1984"]
      }, 1000);
    });
  }
};

var executeBook = async () => {
  for await (var [key, value] of book) {
    console.log(key, value);
  }
};

executeBook();
