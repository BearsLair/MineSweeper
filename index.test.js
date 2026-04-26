import { describe, it } from "node:test";
import assert from "node:assert/strict";
import createBoard from "./index.js";

// Each gameBoard should have 100 cells
describe("3 x 3 Game Board has 9 cells", () => {
  it("should have 9 cells", () => {
    const board = createBoard(3, 3);
    assert.equal(Object.keys(board).length, 9);
  });
});

// Each cell on the board should have an object containing an id, cellClickedOn, bombPresent, surroundingBombs, flagged variables.
// describe("Each cell has the correct properties on 10 x 10 board", () => {
//   it("should have the correct properties", () => {
//     const board = createBoard(10, 10);
//     board.forEach((cell) => {
//       assert.ok(Object.hasOwn(cell, "x"), "Each cell has an x coordinate");
//       assert.ok(Object.hasOwn(cell, "y"), "Each cell has a y coordinate");
//       assert.ok(
//         Object.hasOwn(cell, "cellClickedOn", "Each cell has cellClickedOn"),
//       );
//       assert.ok(
//         Object.hasOwn(cell, "bombPresent"),
//         "Each cell has bombPresent",
//       );
//       assert.ok(
//         Object.hasOwn(cell, "surroundingBombs"),
//         "Each cell has surroundingBombs",
//       );
//       assert.ok(Object.hasOwn(cell, "flagged"), "Each cell has flagged");
//     });
//   });
// });

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
