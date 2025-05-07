//find the second largest in an array usig normal
let arr = [10, 20, 110, 940, 50];
let firstLargest=-Infinity;
let secondLargest=-Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]>firstLargest){
        secondLargest=firstLargest
        firstLargest=arr[i];
    }else if(arr[i]>secondLargest && arr[i]!=firstLargest){
         secondLargest=arr[i]
    }
}

console.log(secondLargest)

//find the third smallest in an array
let arr = [10, 20, 110, 940, 50];
let firstSmallest=Infinity;
let secondSmallest=Infinity;
let thirdSmallest=Infinity;

for(let i=0;i<arr.length;i++){
    if(arr[i]<firstSmallest){
        thirdSmallest=secondSmallest;
        secondSmallest=firstSmallest;
        firstSmallest=arr[i]
    }else if(arr[i]<secondSmallest && arr[i]!=firstSmallest){
        thirdSmallest=secondSmallest
        secondSmallest=arr[i]
    }else if(arr[i]<thirdSmallest && arr[i]!=firstSmallest && arr[i]!=thirdSmallest){
        thirdSmallest=arr[i]
    }
}

console.log(firstSmallest)

//array reversed
let arr = [10, 20, 110, 940, 50];
let reversed=[]
for(let i=arr.length-1;i>=0;i--){
    reversed.push(arr[i])
}

console.log(reversed)


//remove duplicates from an array
function removeValue(arr){
    return arr.filter((value,index)=>arr.indexOf(value)===index)
}

console.log(removeValue([64,3,2,13,1,2,3,4]))

//kth largest
function klarge(arr,k){
    if(k>arr.length){
        return null;
    }
    arr.sort((a,b)=>b-a)
    return arr[k-1];
}

let arr=[1,3,44,657,8,822,23];
console.log(klarge(arr,2))

//find the frequency in an array
let arr = [1, 2, 2, 3, 3, 4, 4, 4, 4, 4];
let frequency={}
for(let i=0;i<arr.length;i++){
    let num=arr[i];
    if(frequency[num]){
        frequency[num]++
    }else{
        frequency[num]=1;
    }
}

console.log(frequency)

//extract number from an array
let arr=["hgde",2,'frff',"erer",3];
let newArray=[]
for(let i=0;i<arr.length;i++){
    if(typeof(arr[i])==="number"){
        newArray.push(arr[i])
    }
}
console.log(newArray)

//find kth largexr element
let arr = [1, 2, 32, 34, 5, 344];
let k = 7;

if (k <= 0 || k > arr.length) {
    console.log(null);
} else {
    arr.sort((a, b) => b - a);
    console.log(arr[k - 1]); 
}

//largest substring
let str=["helloworld","hi","whatisyourname","howreyou"]
let largestsubstring=str.reduce((acc,curr)=>acc.length>curr.length?acc:curr)
console.log(largestsubstring)

//largset substrinq without vowels from a sreing
let str=["helloworld","hi","whatisyourname","howreyou"]

function vowels(s){
    return s.replace(/[aeiouAEIOU]/g,"")
}
let largestsubstring=str.reduce((acc,curr)=>acc.length>curr.length?acc:curr)
console.log(largestsubstring)


//union of 2 arrays
let arr1=[1,2,3]
let arr2=[2,3,4];
let union=[...new Set([...arr1,...arr2])]
console.log(union)

//Find the first non-repeating element in an array
function frequency(arr) {
    let freq = arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
    
    return arr.find(value=>freq[value]===1)
}
console.log(frequency([1, 2, 2, 3, 3, 4])); 

//Check if an array is a palindrome
function palindrome(arr){
    return arr.join("")===arr.reverse().join("")
}
console.log(palindrome([1,2,3,4,3,2,1]))

//Find the most frequent element in an array.
function frequency(arr) {
    let maximum=0;
    let mostFrequentElement;
    
    let freq = arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
    for(let i=0;i<arr.length;i++){
      if(freq[arr[i]]>maximum){
        maximum=freq[arr[i]];
        mostFrequentElement =Number(arr[i])
       }
    }
      return mostFrequentElement;
}
console.log(frequency([1, 2, 2, 3, 3,3, 4]));

//Move all zeros to the end of the array.
function moveZero(arr){
    let newArr=[]
    let zeroArr = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            zeroArr.push(arr[i])
        }else{
            newArr.push(arr[i])
        }
    }
    return newArr.concat(zeroArr)
}

let arr=[2,3,4,0,5,0,7,0,8];
console.log(moveZero(arr))

//Group anagrams together in an array.
function anagram(words){
    let map={};
    words.forEach((word)=>{
        let sorted=word.split("").sort().join("");
        map[sorted]=map[sorted]||[];
        map[sorted].push(word)
    })
    return Object.values(map);
}
let arr=["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(anagram(arr))

//find vowls
function findVowels(str){
    return (str.match(/[aeiou]/gi)||[]).length;
}
console.log(findVowels("ejwhui"))
