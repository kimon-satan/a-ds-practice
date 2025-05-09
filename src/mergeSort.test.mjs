import { describe, it, expect } from "vitest";
import { merge, mergeSort, mergeInPlace } from "./mergeSort.mjs";

describe("merge", () => {
  it("combines two arrays with the correct ordering", () => {
    const left = [0, 4];
    const right = [3, 5];
    const arr = merge(left, right);
    expect(arr).toEqual([0, 3, 4, 5]);
  });
});

describe("mergeSort", () => {
  it.each([
    [[10, 2, 5, 3, 1, 8]],
    [[1, 2, 3, 4, 6, 6]],
    [[0, 0, 0, 0, 0, 1, 1, 1, 1]],
  ])("sorts the array", (arr) => {
    const externalSorted = [...arr].sort((a, b) => a - b);
    const sorted = mergeSort(arr);
    expect(sorted).toEqual(externalSorted);
  });
});

describe("mergeInPlace", () => {
  it.each([{ arr: [10, 14, 30, 7, 11, 16, 28], lo: 0, mid: 3, hi: 6 }])(
    "merges around the mid point",
    ({ arr, lo, mid, hi }) => {
      const tempArr = [...arr];
      mergeInPlace(tempArr, lo, mid, hi);
      console.log(tempArr);
    }
  );
});
