let color = "black";
let click = true;

function fillGridContents(size) {
    let gridContents = document.querySelector(".gridContents");
    let squares = gridContents.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    gridContents.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    gridContents.style.gridTemplateRows = `repeat(${size} , 1fr)`;

let amount = size * size    
for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    gridContents.insertAdjacentElement("beforeend", square);

}
}

fillGridContents(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    document.querySelector(".error").style.display = "none";
    fillGridContents(input);
  } else {
    document.querySelector(".error").style.display = "flex";
  }
}

function colorSquare() {
   if (click) {
    if (color === 'random') {
        this.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    
    } else {
        this.style.backgroundColor = color;
    }
   }

}

function changeColor(choice) {
    color = choice;
} 

function clearGrid() {
    let gridContents = document.querySelector(".gridContents");
    let squares = gridContents.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
      click = !click;
      if (click) {
        document.querySelector(".mode").textContent = "Mode: Coloring";
      } else {
        document.querySelector(".mode").textContent = "Mode: Not Coloring";
      }
    }
  });