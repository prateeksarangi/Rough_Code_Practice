function countUpAndDown(n) {
  console.log("Going up!!");
  for (let i=0; i <= n; i++) {
    console.log(i);
  }

  console.log("At the top!!\nGoing down...");
  for (var i = n; i >= 0; i--) {
    console.log(i);
  }

  console.log("Back down!!\nBye...");
}

console.log(countUpAndDown(10));

// Time complexity:- O(n)
