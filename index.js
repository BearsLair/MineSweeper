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
const calculateSurroundingBombs = () => {};

// Add bombs to the gameboard placed randomly with amount of bombs dynamic

// Add the board to the browser and display it as a grid with clickable cells

const newBoard = createBoard(3, 3);
console.log(newBoard);

export default createBoard;
