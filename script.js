let color = "black";
let click = true;


//A function that fill the drawing with the color selected
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


//change the grid size between 2 and 100 
//returns an error message when the size is not between 2 and 100
function changeSize(input) {
  if (input >= 2 && input <= 100) {
    document.querySelector(".error").style.display = "none";
    fillGridContents(input);
  } else {
    document.querySelector(".error").style.display = "flex";
  }
}


//a function that returns the color selection
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


//a function that clear the grid
function clearGrid() {
    let gridContents = document.querySelector(".gridContents");
    let squares = gridContents.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}


//conditional structure that makes the click display when it is coloring and when its not 
//click doesn't work when the cursor its on the buttons
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