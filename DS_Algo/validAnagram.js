const validAnagram = ( str1, str2 ) => {
  if ( str1.length !== str2.length ) {
    return false;
  }
  let flag1 = {};
  let flag2 = {};
  for ( let val of str1 ) {
    flag1[val] = ( flag1[val] || 0 ) + 1;
  }
  for ( let val of str2 ) {
    flag2[val] = ( flag2[val] || 0 ) + 1;
  }
  for ( let key in flag1 ) {
    if ( !( key in flag2 ) ) {
      return false;
    } else if ( flag2[key] !== flag1[key] ) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram('azzrbsab', 'aazrbbzs'));
