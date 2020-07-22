function sumArray(arr) {
  let t = 0;
  for(let i = 0; i < arr.length; i++) {
    t += arr[i];
  }
  return t;
}

function doubleArray(arr) {
  for(let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }
  return arr;
}

console.log(sumArray([1, 4, 6, 3, 9]));
console.log(doubleArray([1, 4, 6, 3, 9]));
