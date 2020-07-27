const areThereDuplicates = ( ...arguments ) => {
  let obj = { };
  for ( let val in arguments ) {
    obj[arguments[val]] = ++obj[arguments[val]] || 1;
  }

  console.log(obj);
  for ( let val in obj ) {
    if ( obj[val] !== 1 ) {
      return true;
    }
    return false;
  }
}

console.log(areThereDuplicates(1, 3, 5, 3, 4));
