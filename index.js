class Cell {
  constructor(id) {
    this.id = id;
    this.cellClickedOn = false;
    this.bombPresent = false;
    this.surroundingBombs = 0;
    this.flagged = false;
  }
}

let gameBoard = [];

// Initialize the game board with 100 cells
function initializeGameBoard() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let id = `${j},${i}`;
      let cell = new Cell(id);
      gameBoard.push(cell);
    }
  }
}

// Randomize the bomb positions on the game board
function randomizeBombs() {
  let bombCount = 10; // Number of bombs to place
  let placedBombs = 0; // Counter for placed bombs
  while (placedBombs < bombCount) {
    let randomCell = gameBoard[Math.floor(Math.random() * gameBoard.length)];
    if (!randomCell.bombPresent) {
      randomCell.bombPresent = true;
      placedBombs++;
    }
  }
}

// Function to determine amount of bombs surrounding each cell
function calculateSurroundingBombs() {
  for (let cell of gameBoard) {
    let [x, y] = cell.id.split(",").map(Number);
    let bombCount = 0;

    // Check the 8 possible positions
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (dx === 0 && dy === 0) continue; // Skip the current cell being evaluated

        let newX = x + dx;
        let newY = y + dy;

        // Check if the new position is on the game board
        if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10) {
          let newCell = gameBoard[newY * 10 + newX];
          if (newCell.bombPresent) {
            bombCount++;
          }
        }
      }
    }

    cell.surroundingBombs = bombCount;
  }
}

export { Cell, initializeGameBoard, calculateSurroundingBombs };
