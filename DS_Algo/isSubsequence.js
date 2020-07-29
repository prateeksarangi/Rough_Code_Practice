const isSubsequence = ( str1, str2 ) => {
  let i = 0;
  let l = str1.length;
  for ( let val in str2 ) {
    if( str1[i] === str2[val] ) {
      i++;
    }
  }
  if ( i === l ) {
    return true;
  } else {
    return false;
  }
}

console.log(isSubsequence('sing', 'sting'));
