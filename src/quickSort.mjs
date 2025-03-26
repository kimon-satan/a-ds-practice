//https://www.geeksforgeeks.org/quick-sort-algorithm/

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
  arr[j] = arr[i];
  arr[i] = temp;
}

export function lomuto(inputArray) {
  let p = inputArray.length - 1;
  let i = 0;
  for (let j = 0; j < inputArray.length; j++) {
    if (inputArray[j] <= inputArray[p]) {
      swap(inputArray, i, j);
      i++;
    }
  }
  swap(inputArray, i, p);
}

export function quickSortLomuto(inputArray) {
  // TODO finish this using lomuto
}
