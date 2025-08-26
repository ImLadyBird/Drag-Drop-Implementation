const leftBox = document.getElementById("left");
const rightBox = document.getElementById("right");
const listRight = document.querySelector(".list-right");
const listLeft = document.querySelector(".list-left");
const card = document.querySelectorAll(".card");

card.forEach((card) => {
  card.addEventListener("dragstart", function (e) {
    let selected = e.target;

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    rightBox.addEventListener("drop", function (e) {
      listLeft.append(selected);
      selected = "";
    });

    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    leftBox.addEventListener("drop", function (e) {
      listRight.append(selected);
      selected = "";
    });
  });
});
