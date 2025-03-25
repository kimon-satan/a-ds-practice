import { describe, it, expect } from "vitest";
import { merge, mergeSort } from "./mergeSort.mjs";

describe("merge", () => {
  it("combines two arrays with the correct ordering", () => {
    const left = [0, 4];
    const right = [3, 5];
    const arr = merge(left, right);
    expect(arr).toEqual([0, 3, 4, 5]);
  });
});

describe("mergeSort", () => {
  it("sorts the array", () => {
    const arr = [10, 2, 5, 3, 1, 8];
    const sorted = mergeSort(arr);
    expect(sorted).toEqual([1, 2, 3, 5, 8, 10]);
  });
});
