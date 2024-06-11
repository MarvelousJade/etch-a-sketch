function genDivs(size) {
  let container = document.querySelector("#container");

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

let size;

do {
  size = parseInt(prompt("Input grid size: (less than 100)", ""));
} while(size > 99 || !Number.isInteger(size));

genDivs(size);

let container = document.querySelector("#container");

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