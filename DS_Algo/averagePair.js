const averagePair = (arr, avg) => {
  let i = 0, j = arr.length - 1;
  while(i < j) {
    if ( (arr[i] + arr[j]) / 2 < avg ) {
      i++;
    } else if ( ((arr[i] + arr[j]) / 2 > avg) ) {
      j--;
    } else if ( ((arr[i] + arr[j]) / 2 === avg) ) {
      return true;
    }
  }
  return false;
}

console.log(averagePair([-2, -1, 0, 1, 2, 3, 4, 5], 1));
