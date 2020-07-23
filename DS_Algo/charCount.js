// Write a function that takes in a string and returns counts of each character in the string.

// Refactor - 1
// function charCout(str) {
//   let result = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)){
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       };
//     }
//   }
//   return result;
// }


// Refactor - 2
function charCout(str) {
  let result = {};
  for (let char of str) {
    if (isAlphaNumaric(char)){
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

function isAlphaNumaric(char) {
  let code = char.charCodeAt(0);
  if ( !(code > 47 && code < 58) &&
       !(code > 64 && code < 91) &&
       !(code > 96 && code < 123)) {
    return false;
  }
  return true;
}

console.log(charCout("Hello, How are you?"));
