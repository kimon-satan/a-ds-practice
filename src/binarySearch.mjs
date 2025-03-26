export function binarySearch(sortedList, searchValue, startingIndex = 0) {
  const middleIndex = Math.floor(sortedList.length / 2);
  const middle = sortedList[middleIndex];

  if (searchValue === middle) {
    return middleIndex + startingIndex;
  }
  if (sortedList.length <= 1) {
    return -1;
  }

  if (searchValue < middle) {
    return binarySearch(
      sortedList.slice(0, middleIndex),
      searchValue,
      startingIndex
    );
  } else {
    return binarySearch(
      sortedList.slice(middleIndex),
      searchValue,
      startingIndex + middleIndex
    );
  }
}

export function binarySearchLoop(sortedList, searchValue) {
  let start = 0;
  let finish = sortedList.length - 1;

  while (finish >= start) {
    const middle = Math.floor((finish - start) / 2) + start;

    if (sortedList[middle] == searchValue) {
      return middle;
    }
    if (searchValue < sortedList[middle]) {
      finish = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}
