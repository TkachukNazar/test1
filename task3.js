function findEven(arr) {
  let res = [];
  arr.sort(function (a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 == 0) {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(
  findEven(["Apple", "Carrot", "banana", "pineapple", "pear", "plum"])
);
