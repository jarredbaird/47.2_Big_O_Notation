function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    // n
    console.log(i); // 1
  }
}
// n
// Time Complexity: O(n)

function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    // n
    console.log(i); // 1
  }
}
// n
// Time Complexity: O(n)

function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    // 10
    console.log(i); // 1
  }
}
// 10 -> 1
// Time Complexity: O(1)

function onlyElementsAtEvenIndex(array) {
  let newArray = []; // 1
  for (let i = 0; i < array.length; i++) {
    // n
    if (i % 2 === 0) {
      // 1
      newArray.push(array[i]); // 1
    }
  }
  return newArray; // 1
}
// Time Complexity: O(n)

function subtotals(array) {
  let subtotalArray = []; // 1
  for (let i = 0; i < array.length; i++) {
    // n
    let subtotal = 0; // 1
    for (let j = 0; j <= i; j++) {
      //n
      subtotal += array[j]; // 1
    }
    subtotalArray.push(subtotal); // 1
  }
  return subtotalArray; // 1
}
// Time Complexity: O(n^2)

function vowelCount(str) {
  let vowelCount = {}; // 1
  const vowels = "aeiouAEIOU"; // 1

  for (let char of str) {
    // 1
    if (vowels.includes(char)) {
      // n
      if (char in vowelCount) {
        // 1
        vowelCount[char] += 1; // 1
      } else {
        // 1
        vowelCount[char] = 1; // 1
      }
    }
  }

  return vowelCount; // 1
}

// Time Complexity: O(n)
