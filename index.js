import { CLIENT_RENEG_LIMIT } from "node:tls";

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
const calculateSurroundingBombs = (board, widthAndHeight, cellId) => {
  const visited = [];
  let count = 0;

  // Check adjacent cells
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let newRow = board[cellId].row + i;
      let newCol = board[cellId].col + j;

      // Skip out of bounds or visited cells
      if (
        newRow >= 0 &&
        newRow < widthAndHeight &&
        newCol >= 0 &&
        newCol < widthAndHeight &&
        !visited.includes(`${newCol},${newRow}`)
      ) {
        try {
          // Check if the neighbor has a bomb and mark it as visited

          const neighborId = `${newCol},${newRow}`;
          if (board[neighborId].bombPresent) {
            count += 1;
          }
          visited.push(neighborId);
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
const addBombs = (board, bombAmountToPlace) => {
  const totalCells = Object.keys(board).length;
  let bombCount = 0;

  while (bombCount < bombAmountToPlace) {
    let keyIndex = Math.floor(Math.random() * totalCells);
    let currentCellId = totalCells[keyIndex];

    if (!board[currentCellId].bombPresent) {
      board[currentCellId].bombPresent = true;
      bombCount++;
    }
  }

  return board;
};

// Add the board to the browser and display it as a grid with clickable cells

export { createBoard, calculateSurroundingBombs, addBombs };
