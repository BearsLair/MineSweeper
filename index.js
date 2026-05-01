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

class GameBoard {
  constructor(widthAndHeight) {
    this.widthAndHeight = widthAndHeight;
    this.board = {};
  }

  // Create a new game board with the specified dimensions.
  createBoard(widthAndHeight) {
    let newBoard = {};
    for (let i = 0; i < widthAndHeight; i++) {
      for (let j = 0; j < widthAndHeight; j++) {
        const id = `${j},${i}`;
        let cell = new Cell(j, i);
        newBoard[id] = cell;
      }
    }
    this.board = newBoard;
  }

  calculateSurroundingBombs(board, widthAndHeight, cellId) {
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
              `Error calculating surrounding bombs for cell ${cellId}:`,
              error,
            );
          }
        }
      }
    }

    return count;
  }

  addBombs(board, bombAmountToPlace) {
    let alteredBoard = board;

    const keysArray = Object.keys(alteredBoard);

    const randomizedKeys = [...Array(bombAmountToPlace)].map(
      (_, index) => keysArray[Math.floor(Math.random() * keysArray.length)],
    );

    randomizedKeys.forEach((key) => {
      alteredBoard[key].bombPresent = true;
    });
    this.board = alteredBoard;
  }
}

// TODO: Add the board to the browser and display it as a grid with clickable cells

export default GameBoard;
