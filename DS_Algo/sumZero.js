const sumZero = (arr) => {
  let i = 0, j = arr.length - 1;
  while ( i < j ) {
    if ( arr[i] + arr[j] === 0 ) {
      return [arr[i], arr[j]];
    } else if ( arr[i] + arr[j] < 0 ) {
      i++;
    } else if ( arr[i] + arr[j] > 0 ) {
      j--;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
