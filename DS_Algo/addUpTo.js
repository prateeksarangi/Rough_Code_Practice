function addUpTo1(n) {
  let t = 0;
  for (let i=1; i<=n; i++) {
    t += i;
  }
  return t;
  return n*(n+1) / 2; // Time complexity:- O(n)
}

function addUpTo2(n) {
  return n*(n+1) / 2; // Time complexity:- O(1)
}

// console.log(addUpTo(100));
