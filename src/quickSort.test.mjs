import { it, describe, expect } from "vitest";
import { lomuto, quickSort, quickSortLomuto } from "./quickSort.mjs";

describe("quickSort - Naive", () => {
  it.each([
    [[10, 2, 5, 3, 1, 8]],
    [[1, 2, 3, 4, 6, 6]],
    [[0, 0, 2, 0, 0, 1, 1, 1, 1]],
  ])("sorts the array", (arr) => {
    const externalSorted = [...arr].sort((a, b) => a - b);
    const sorted = quickSort(arr);
    expect(sorted).toEqual(externalSorted);
  });
});

describe("lomuto", () => {
  it.each([
    [[10, 2, 5, 3, 1, 8]],
    [[1, 2, 3, 4, 6, 6]],
    [[0, 0, 0, 0, 0, 1, 1, 1, 1]],
    [[20, 30, 50, 100, 10, 80, 40]],
  ])("partitions the array", (input) => {
    const t = [...input];
    const pv = t[t.length - 1];
    const ip = lomuto(t, 0, input.length - 1);
    t.forEach((v, i) => {
      if (v < pv) {
        expect(i).toBeLessThan(ip);
      } else {
        expect(i).toBeGreaterThanOrEqual(ip);
      }
    });
  });
});

describe("quickSort - Lomuto", () => {
  it.each([
    [[10, 2, 5, 3, 1, 8]],
    [[1, 2, 3, 4, 6, 6]],
    [[0, 0, 2, 0, 0, 1, 1, 1, 1]],
  ])("sorts the array", (arr) => {
    const externalSorted = [...arr].sort((a, b) => a - b);
    quickSortLomuto(arr);
    expect(arr).toEqual(externalSorted);
  });
});
