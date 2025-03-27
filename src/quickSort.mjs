2; //https://www.geeksforgeeks.org/quick-sort-algorithm/

export function quickSort(inputArray) {
  // choose a pivot
  const p = Math.floor(Math.random() * inputArray.length);

  // partition the array
  // Naive partition
  const left = [];
  const right = [];
  const ep = [];
  for (const i of inputArray) {
    if (i < inputArray[p]) {
      left.push(i);
    } else if (i > inputArray[p]) {
      right.push(i);
    } else {
      ep.push(i);
    }
  }

  // recursive call
  const sortedLeft = left.length > 1 ? quickSort(left) : left;
  const sortedRight = right.length > 1 ? quickSort(right) : right;

  return [...sortedLeft, ...ep, ...sortedRight];
}

export function swap(arr, i, j) {
  const temp = arr[j];
  if (temp === undefined) {
    throw new Error(`temp undefined at ${j} for ${arr}`);
  }
  arr[j] = arr[i];
  arr[i] = temp;
}

export function lomuto(inputArray, lo = 0, hi) {
  const pivot = inputArray[hi];
  let i = lo;
  for (let j = lo; j < hi; j++) {
    if (inputArray[j] < pivot) {
      // the wikipedia psuedocode does <= but this can't handle multiple pivot values
      swap(inputArray, i, j);
      i++;
    }
  }
  swap(inputArray, i, hi);
  return i;
}

export function quickSortLomuto(inputArray, lo = 0, hi) {
  if (hi === undefined) {
    hi = inputArray.length - 1;
  }

  if (lo >= hi) {
    return;
  }

  const pi = lomuto(inputArray, lo, hi);
  quickSortLomuto(inputArray, lo, pi - 1);
  quickSortLomuto(inputArray, pi + 1, hi); // NB. we need to increment here to avoid infinite loops
}
