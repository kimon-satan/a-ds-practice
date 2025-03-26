import { it, describe, expect } from "vitest";
import { lomuto, quickSort } from "./quickSort.mjs";

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
  ])("partitions the array", (input) => {
    const t = [...input];
    const p = input[input.length - 1];
    lomuto(t);
    const ip = t.findIndex((v) => v === p);
    t.forEach((v, i) => {
      if (v < p) {
        expect(i).toBeLessThan(ip);
      } else {
        expect(i).toBeGreaterThanOrEqual(ip);
      }
    });
  });
});
