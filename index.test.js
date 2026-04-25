import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { Cell, initializeGameBoard, calculateSurroundingB } from "index.js";

// Each gameBoard should have 100 cells
describe("Game Board has 100 cells", () => {
  it("should have 100 cells", () => {
    initializeGameBoard();
    assert.equal(gameBoard.length, 100);
  });
});
