import { describe, it } from "node:test";
import assert from "node:assert/strict";
import initializeGameBoard from "./index.js";

// Each gameBoard should have 100 cells
describe("Game Board has 100 cells", () => {
  it("should have 100 cells", () => {
    const board = initializeGameBoard();
    assert.equal(board.length, 100);
  });
});

// Each cell on the board should have an object containing an id, cellClickedOn, bombPresent, surroundingBombs, flagged variables.
describe("Each cell has the correct properties", () => {
  it("should have the correct properties", () => {
    const board = initializeGameBoard();
    board.forEach((cell, index) => {
      assert.ok(Object.hasOwn(cell, "id"), "Each cell has an id");
      assert.ok(
        Object.hasOwn(cell, "cellClickedOn", "Each cell has cellClickedOn"),
      );
      assert.ok(
        Object.hasOwn(cell, "bombPresent"),
        "Each cell has bombPresent",
      );
      assert.ok(
        Object.hasOwn(cell, "surroundingBombs"),
        "Each cell has surroundingBombs",
      );
      assert.ok(Object.hasOwn(cell, "flagged"), "Each cell has flagged");
    });
  });
});
