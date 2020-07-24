// const sameArray = (arr1, arr2) => {
//   if ( arr1.length !== arr2.length ) {
//     return false;
//   }
//   for ( let i = 0; i < arr1.length; i++ ) {
//     let correctIndex = arr2.indexOf( arr1[i] ** 2 )
//     if ( correctIndex === -1 ) {
//       return false;
//     }
//     arr2.slice(correctIndex, 1);
//   }
//   return true;
// }

const sameArray = (arr1, arr2) => {
  if ( arr1.length !== arr2.length ) {
    return false;
  }
  let flag1 = {};
  let flag2 = {};
  for ( let val of arr1 ) {
    flag1[val] = (flag1[val] || 0) + 1;
  }
  for ( let val of arr2 ) {
    flag2[val] = (flag2[val] || 0) + 1;
  }
  for ( key in flag1 ) {
    if ( !( key ** 2 in flag2 ) ) {
      return false;
    } else if ( flag2[key ** 2] !== flag1[key] ) {
      return false;
    }
  }
  return true;
}

console.log(sameArray([1, 2, 4, 5], [4, 16, 1, 25]));
