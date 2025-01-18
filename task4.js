let students = {
  MelnikIvan: 10,
  BondarenkoMax: 9,
  ShevchenkoDanylo: 11,
  KovalchukDaryna: 11,
};
document.getElementById("Show").addEventListener("click", function () {
  console.log(students);
  let s = "";
  for (let i = 0; i < Object.values(students).length; i++) {
    s += `${Object.keys(students)[i]}: ${Object.values(students)[i]}<br>`;
  }
  document.getElementById("list").innerHTML = `<h1>${s}</h1>`;
});

document.getElementById("+").addEventListener("click", function () {
  let name = prompt("Enter name and surname of the student: ");
  let mark = +prompt("Enter mark of the student: ");
  students[name] = mark;
});
document.getElementById("-").addEventListener("click", function () {
  let name = prompt("Enter name and surname of the student: ");
  delete students[name];
});
document.getElementById("Average").addEventListener("click", function () {
  let avr = 0;
  for (let i = 0; i < Object.values(students).length; i++) {
    avr += Object.values(students)[i];
  }
  avr /= Object.values(students).length;
  console.log(avr);
  alert(avr);
});
