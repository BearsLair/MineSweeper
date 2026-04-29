import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { createBoard, calculateSurroundingBombs } from "./index.js";

// A 3 X 3 gameboard has 9 cells
describe("3 x 3 Game Board has 9 cells", () => {
  it("should have 9 cells", () => {
    const board = createBoard(3, 3);
    assert.equal(Object.keys(board).length, 9);
  });
});

// A 10 x 10 gameboard has 100 cells
describe("10 x 10 Game Board has 100 cells", () => {
  it("should have 100 cells", () => {
    const board = createBoard(10, 10);
    assert.equal(Object.keys(board).length, 100);
  });
});

// Each cell on the board should have an object containing an id, cellClickedOn, bombPresent, surroundingBombs, flagged variables.
describe("Each cell has the correct properties on 10 x 10 board", () => {
  it("should have the correct properties", () => {
    const board = createBoard(10, 10);

    for (const key of Object.keys(board)) {
      assert.equal(typeof board[key], "object");
      assert.ok(board[key].hasOwnProperty("cellClickedOn"));
      assert.ok(board[key].hasOwnProperty("bombPresent"));
      assert.ok(board[key].hasOwnProperty("surroundingBombs"));
      assert.ok(board[key].hasOwnProperty("flagged"));
      assert.ok(board[key].hasOwnProperty("row"));
      assert.ok(board[key].hasOwnProperty("col"));
    }
  });
});

// Create a 3 x 3 board and place a bomb on the top-right cell. The calculateSurroundingBombs function should correctly count the number of surrounding bombs for that cell.
describe("calculateSurroundingBombs should calculate the correct number of surrounding bombs for a cell", () => {
  it("count should be 1", () => {
    const board = createBoard(3, 3);
    board["0,2"].bombIsPresent = true;

    const count = calculateSurroundingBombs(board, "1,1");
    assert.ok(count, 1);
  });
});

// describe("calculateSurroundingBombs", () => {
//   it("should correctly count the surrounding bombs for a cell in a 3x3 grid", () => {
//     // Create a 3x3 game board
//     const board = initializeGameBoard(3, 3);

//     // Place bomb on top-right cell
//     board[2].bombIsPresent();
//     board[5].calculateSurroundingBombs(3, 3);

//     const evaluation = board[5].surroundingBombs === 1;

//     // Assert
//     assert.ok(evaluation, "The surrounding bombs should be 1");
//   });
// });
