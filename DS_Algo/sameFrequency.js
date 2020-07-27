const sameFrequency = (num1, num2) => {
  let arr1 = [ ];
  let arr2 = [ ];

  let i = 0;
  while (num1 > 0) {
    arr1[i] = num1%10;
    num1 = Math.floor(num1/10);
    i++;
  }

  i = 0;
  while (num2 > 0) {
    arr2[i] = num2%10;
    num2 = Math.floor(num2/10);
    i++;
  }

  if ( arr1.length !== arr2.length ) {
    return false;
  }

  let flag1 = { };
  let flag2 = { };
  for ( let val in arr1 ) {
    flag1[arr1[val]] = ++flag1[arr1[val]] || 1;
  }
  console.log(flag1);

  for ( let val in arr2 ) {
    flag2[arr2[val]] = ++flag2[arr2[val]] || 1;
  }
  console.log(flag2);

  for ( let key in flag1 ) {
    if ( !( key in flag2 ) ) {
      return false;
    } else if ( flag2[key] !== flag1[key] ) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
