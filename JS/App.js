const leftBox = document.getElementById("left");
const rightBox = document.getElementById("right");
const listRight = document.querySelector(".list-right");
const listLeft = document.querySelector(".list-left");
const card = document.querySelectorAll(".card");

let selected = null; 

card.forEach((card) => {
  card.addEventListener("dragstart", function (e) {
  selected = e.target;
  });
});

leftBox.addEventListener("dragover", function (e) {
e.preventDefault();
});

leftBox.addEventListener("drop", function (e) {
listLeft.append(selected);
selected = null;
});

rightBox.addEventListener("dragover", function (e) {
e.preventDefault();
});

rightBox.addEventListener("drop", function (e) {
listRight.append(selected);
selected = null;
});


    