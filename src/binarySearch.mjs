export function binarySearch(sortedList, searchValue, startingIndex = 0) {
  if (sortedList.length === 0) {
    return -1;
  }
  const middleIndex = Math.floor(sortedList.length / 2);
  const middle = sortedList[middleIndex];

  if (searchValue === middle) {
    return middleIndex + startingIndex;
  } else if (searchValue < middle) {
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
