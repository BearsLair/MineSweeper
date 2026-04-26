class Cell {
  constructor() {
    this.cellClickedOn = false;
    this.bombPresent = false;
    this.surroundingBombs = 0;
    this.flagged = false;
  }
}

// Create the square gameboard with dynamic rows and columns equal to or greater than 3 rows by 3 columns
const createBoard = (widthAndHeight) => {
  let board = {};
  for (let i = 0; i < widthAndHeight; i++) {
    for (let j = 0; j < widthAndHeight; j++) {
      let id = `${j},${i}`;
      let cell = new Cell(j, i);
      board[id] = cell;
    }
  }
  return board;
};

// Create a function to calculate the number of surrounding bombs around a cell
const calculateSurroundingBombs = (board, cell) => {
  let count = 0;
  const row = parseInt(cell.id.split(",")[0], 10);
  const col = parseInt(cell.id.split(",")[1], 10);

  // Check adjacent cells
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      // Check bounds
      if (i >= 0 && i < board.length && j >= 0 && j < board[i].length) {
        const cellId = `${j},${i}`;
        count += board[cellId].bombPresent ? 1 : 0;
      }
    }
  }

  return count;
};

// Add bombs to the gameboard placed randomly with amount of bombs dynamic

// Add the board to the browser and display it as a grid with clickable cells

const newBoard = createBoard(3, 3);
console.log(newBoard);

export default createBoard;
