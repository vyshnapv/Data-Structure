let arr=[2,3,4];
for(let i=arr.length;i>=1;i--){
 arr[i]=arr[i-1]
}

console.log(arr)

//check the array is sorted or not with linear search
function isSorted(Arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            return false
        }
    }
    return true
}
let arr=[1,2,3]
console.log(isSorted(arr))

//valid anagram or not
function isAnagram(str1,str2){
    if(str1.length!==str2.length){
        return false
    }
    
    let freq1={};
     let freq2={};
    for(let char of str1){
        freq1[char]=(freq1[char]||0)+1
    }
    for(let char of str2){
        freq2[char]=(freq2[char]||0)+1
    }
    
    for(let char in freq1){
        if(freq1[char]!==freq2[char]){
        return false
    }
    }
    return true
}
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false

//duplicate fount or not
function hasDuplicates(str) {
    let seen = {};
    for (let char of str) {
        if (seen[char]) {
            return true; 
        }
        seen[char] = true;
    }

    return false;
}
console.log(hasDuplicates("hello"));  
console.log(hasDuplicates("world")); 

//find 3rd largest element from an unsorted array
let arr=[34,6,12,98,45,456]
let largest=-Infinity
let second=-Infinity
let third=-Infinity
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        third=second;
        second=largest;
        largest=arr[i]
    }else if(arr[i]>second && arr[i]!=largest){
        third=second;
        second=arr[i]
    }else if(arr[i]>third && arr[i]!=second && arr[i!=largest]){
        third=arr[i]
    }
}

console.log(third)
console.log(second)
console.log(largest)
