//check if an array sorted or not with linear time complexity
function linear(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            return false
        }
    }
    return true
}

let arr=[1,2,3,4]
console.log(linear(arr))

//sort alphabettically using quick sort
function quickSortStrings(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSortStrings(left), pivot, ...quickSortStrings(right)];
}

const fruits = ["banana", "apple", "cherry", "blueberry", "date"];
console.log(quickSortStrings(fruits));

//common character in two string
function commonCharacters(str1, str2) {
  const charsSet = new Set(str1); // unique chars in str1
  const commonChars = new Set();

  for (const ch of str2) {
    if (charsSet.has(ch)) {
      commonChars.add(ch);
    }
  }

  return Array.from(commonChars).join('');
}

// Example:
const s1 = "hello";
const s2 = "world";
console.log(commonCharacters(s1, s2)); // Output: "lo"

