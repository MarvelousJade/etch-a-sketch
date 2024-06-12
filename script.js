let container = document.querySelector("#container");
let size;

function genDivs(size) {

  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 1; j <= size; j++) {
      let cell = document.createElement("div");
      cell.className = "gridSquare";
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

function getSize(size) {
  do {
    size = parseInt(prompt("Input grid size (less than 100): ", ""));
  } while(size > 99 || !Number.isInteger(size));
  return size;
}

genDivs(64);

container.addEventListener("mouseover", (event) => {
  let target = event.target;
  
  if (target.className === "gridSquare") {
    setBg(target);
  }
});

function setBg (target) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  target.style.backgroundColor = "#" + randomColor;
}

const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
  clickHandler()
});

function clickHandler() {
  removeCanvas();
  size = getSize();
  genDivs(size);
}

function removeCanvas() {
  const rows = document.querySelectorAll(".row");

  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}