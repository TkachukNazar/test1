let str = prompt("Речення: ");
str = str.toLowerCase();
let sep = str.split(" ");
let res = [];
for (let i = 0; i < sep.length; i++) {
  if (
    sep.find(function (value, index, array) {
      return value[0] == sep[i][0] && value != sep[i];
    }) != undefined
  ) {
    res.push(sep[i]);
  }
}
alert(res.sort().join(", "));
