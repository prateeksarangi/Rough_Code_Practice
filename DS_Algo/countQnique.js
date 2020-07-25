// const countUnique = ( arr ) => {
//   let obj = { };
//   for( let val of arr ){
//     obj[val] = ++obj[val] || 1;
//   }
//   return Object.keys(obj).length;
// }


const countUnique = ( arr ) => {
  if ( arr.length === 0 ) return 0;
  let i = 0, j = 1;
  for ( j = 1; j < arr.length; j++ ) {
    if ( arr[i] !== arr[j] ) {
      arr[++i] = arr[j];
    }
  }
  return i+1;
}

console.log(countUnique([1, 1, 1, 2]));
