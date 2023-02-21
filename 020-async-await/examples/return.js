var fetchData = async () => {
  return "hello!";
};

var result = fetchData();
console.log(result);

result
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

var useHello = async () => {
  var result = await fetchData();
  console.log(result);
};

useHello();
