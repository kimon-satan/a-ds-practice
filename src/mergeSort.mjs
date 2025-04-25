//TODO: In place https://www.geeksforgeeks.org/in-place-merge-sort/?ref=header_outind

// NB. merge is not the same as partition as the subarrays must be sorted in the first place !
export function merge(L, R) {
  const tL = [...L];
  const tR = [...R];
  const arr = [];
  while (tL.length > 0 && tR.length > 0) {
    if (tL[0] <= tR[0]) {
      arr.push(tL.shift());
    } else {
      arr.push(tR.shift());
    }
  }
  //add remaining elements
  arr.push(...tL, ...tR);
  return arr;
}

export function mergeSort(inputArray) {
  if (inputArray.length <= 2) {
    return inputArray;
  } else {
    const middle = Math.floor(inputArray.length / 2);
    const left = mergeSort(inputArray.slice(0, middle));
    const right = mergeSort(inputArray.slice(middle));
    return merge(left, right);
  }
}

export function mergeInPlace(arr, lo, mid, hi) {
  let l = lo;
  let r = mid + 1;
  while (l <= mid && r <= hi) {
    if (arr[l] <= arr[r]) {
      l++;
    } else {
      const v = arr[r];
      let i = r;
      while (i != l) {
        arr[i] = arr[i - 1];
        i--;
      }
      arr[l] = v;
      l++;
      r++;
      mid++;
    }
  }
}
