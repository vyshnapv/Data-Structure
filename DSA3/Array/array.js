//append a value at the front or in between two elements of an array 
//1
let arr=[23,56,89,11,4]
let value=90;
for(let i=arr.length;i>0;i--){
    arr[i]=arr[i-1]
}
arr[0]=value
console.log(arr)

//2
// in between two element
let arr=[23,56,89,11,4]
let value=90;
let index=2
for(let i=arr.length;i>index;i--){
    arr[i]=arr[i-1]
}
arr[index]=value
console.log(arr)

//3.
// insert at the end
let arr=[23,56,89,11,4]
let val=67;
arr[arr.length]=val
console.log(arr)

//revrese an array and elemnets in an array
//1.
let arr = ["one", "two", "three"];
let reversed=[]
for(let i=arr.length-1;i>=0;i--){
    let spliting=arr[i].split("").reverse().join("")
     reversed.push(spliting) 
}
console.log(reversed)

//2.
let arr = ["one", "two", "three"];
let reversed=[]
for(let i=arr.length-1;i>=0;i--){
   let str=arr[i];
   let reverse="";
   for(let j=str.length-1;j>=0;j--){
       reverse+=str[j]
   }
   reversed.push(reverse)
}
console.log(reversed)

//3.
let arr = ["one", "two", "three"];

let reversedArr = arr
    .reverse()                 
    .map(str => str.split("").reverse().join(""));
console.log(reversedArr); 

//remove duplicate from a string
1.
let str = "programming";
let seen=new Set()
let result=""
for(let char of str){
    if(!seen.has(char)){
        seen.add(char)
        result+=(char)
    }
}
console.log(result)

//2.
let str = "programming";
let result=""
for(let i=0;i<str.length;i++){
    if(result.indexOf(str[i])==-1){
        result+=str[i]
    }
}
console.log(result)

//3.
let str = "programming";
let result=str.split("")
.filter((val,index,arr)=>arr.indexOf(val)===index)
.join("")
console.log(result)

//third largest element
//1
let arr=[78,23,77,34,6,121,9,55]
let sorted=[...new Set(arr)].sort((a,b)=>b-a)
console.log(sorted[2])

//2
let arr=[78,23,77,34,6,121,9,55]
function thirdLargest(arr){
    let sorted=[...new Set(arr)].sort((a,b)=>b-a)
    return sorted[2]
}
console.log(thirdLargest(arr))

//3.
function thirdLargest(arr){
    let first=-Infinity;
    let second=-Infinity;
    let third=-Infinity;
    
    for(let num of arr){
        if(num>first){
            third=second;
            second=first;
            first=num
        }else if(num>second && num!=first){
            third=second;
            second=num
        }else if(num>third && num!=second){
            third=num
        }
    }
    return third;
}

let arr=[23,45,1,34,78,90,12,445,67,34,78]
console.log(thirdLargest(arr))

//remove duplicate from an array
//1.o(n)complexity
let arr = [1, 2, 2, 3, 4, 4, 5];
let unique=[...new Set(arr)]
console.log(unique)

//2.
let arr = [1, 2, 2, 3, 4, 4, 5];
let unique=arr.filter((value,index,array)=>array.indexOf(value)==index)
console.log(unique)

//3.
let arr = [1, 2, 2, 3, 4, 4, 5];
function removed(arr){
    let result=[];
    for(let num of arr){
        if(!result.includes(num)){
            result.push(num)
        }
    }
    return result
}

console.log(removed(arr))

//4.o(n)
function removeDuplicates(arr) {
    let set = new Set();
    let result = [];

    for (let val of arr) {
        if (!set.has(val)) {
            set.add(val);
            result.push(val);
        }
    }
    return result;
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5])); 

//unique character in string
let str = "programming";

let freq = {};
for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
}

let uniqueChars = Object.keys(freq).filter(c => freq[c] === 1);
console.log(uniqueChars);

//find longest substring in an array
let arr = ["apple", "banana", "kiwi", "grapefruit", "mango"];
let longest = "";
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
        longest = arr[i];
    }
}
console.log(longest);

//second longest string in a sentence
let sentence="hello how are you"
let largest="";
let second=""
let sorting=sentence.split(" ")

for(let i=0;i<sorting.length;i++){
    if(sorting[i].length>largest.length){
        second=largest;
        largest=sorting[i]
    }else if(sorting[i].length>second.length && sorting[i] !== largest){
        second=sorting[i]
    }
}
console.log(second)