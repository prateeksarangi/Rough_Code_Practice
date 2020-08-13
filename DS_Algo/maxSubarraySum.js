const maxSubarraySum = ( arr, n ) => {
  if ( n > arr.length ) {
    return null;
  }
  let i, temp = 0, sum = 0;

  for ( i = 0; i < n; i++ ) {
    temp += arr[i];
  }

  for ( i = n; i < arr.length; i++ ) {
    temp = temp + arr[i] - arr[i-n];
    sum = Math.max(temp, sum);
  }

  return sum;
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
