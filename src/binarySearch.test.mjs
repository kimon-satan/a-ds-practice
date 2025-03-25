import { binarySearch, binarySearchLoop } from "./binarySearch.mjs";
import { describe, it, expect } from "vitest";

describe("binarySearch", () => {
  it.each([
    { inputArray: [1, 2, 3, 4, 5, 6, 7, 8], searchValue: 4, expectedValue: 3 },
    {
      inputArray: [1, 8, 30, 40, 50, 60, 70, 80],
      searchValue: 40,
      expectedValue: 3,
    },
    { inputArray: [1, 2, 3, 4, 5, 6, 7, 8], searchValue: 1, expectedValue: 0 },
    { inputArray: [1, 2, 3, 4, 5, 6, 7, 8], searchValue: 8, expectedValue: 7 },
    { inputArray: [1, 2, 3, 4, 5, 6, 7, 8], searchValue: 9, expectedValue: -1 },
  ])(
    "returns the index of the searchValue if found",
    ({ inputArray, searchValue, expectedValue }) => {
      expect(binarySearch(inputArray, searchValue)).toEqual(expectedValue);
    }
  );
});

describe("binarySearchLoop", () => {
  it.each([
    { inputArray: [1, 2, 3, 4, 5, 6, 7, 8], searchValue: 4, expectedValue: 3 },
    {
      inputArray: [1, 8, 30, 40, 50, 60, 70, 80],
      searchValue: 40,
      expectedValue: 3,
    },
    { inputArray: [1, 2, 3, 4, 5, 6, 7, 8], searchValue: 1, expectedValue: 0 },
    { inputArray: [1, 2, 3, 4, 5, 6, 7, 8], searchValue: 8, expectedValue: 7 },
    { inputArray: [1, 2, 3, 4, 5, 6, 7, 8], searchValue: 9, expectedValue: -1 },
  ])(
    "returns the index of the searchValue if found",
    ({ inputArray, searchValue, expectedValue }) => {
      expect(binarySearchLoop(inputArray, searchValue)).toEqual(expectedValue);
    }
  );
});
