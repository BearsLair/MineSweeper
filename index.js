class Cell {
  constructor(row, col) {
    this.cellClickedOn = false;
    this.bombPresent = false;
    this.surroundingBombs = 0;
    this.flagged = false;
    this.row = row;
    this.col = col;
  }
}

// Create the square gameboard with dynamic rows and columns equal to or greater than 3 rows by 3 columns
const createBoard = (widthAndHeight) => {
  let board = {};
  for (let i = 0; i < widthAndHeight; i++) {
    for (let j = 0; j < widthAndHeight; j++) {
      const id = `${j},${i}`;
      let cell = new Cell(j, i);
      board[id] = cell;
    }
  }
  return board;
};

// Create a function to calculate the number of surrounding bombs around a cell
const calculateSurroundingBombs = (board, cell) => {
  let count = 0;

  // Check adjacent cells
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const newRow = cell.row + i;
      const newCol = cell.col + j;

      if (
        newRow >= 0 &&
        newRow < board.length &&
        newCol >= 0 &&
        newCol < board[newRow].length
      ) {
        try {
          const neighborId = `${newCol},${newRow}`;
          count += board[neighborId].bombPresent ? 1 : 0;
        } catch (error) {
          console.error(
            `Error calculating surrounding bombs for cell ${cell.id}:`,
            error,
          );
        }
      }
    }
  }

  return count;
};

// Add bombs to the gameboard placed randomly with amount of bombs dynamic

// Add the board to the browser and display it as a grid with clickable cells

export { createBoard, calculateSurroundingBombs };
