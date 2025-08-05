//extract number from a string
let str = "The price is 450 dollars and 30 cents.";

let digits = str.split(" ").filter(char => !isNaN(char) && char!==" ");

console.log(digits);


//function to make sure sentence is begin with uppercase and end with period
let str="Hello.";
let indexing=str.charAt(0).toUpperCase()+ str.slice(1)
if(indexing.endsWith(".")){
    console.log(true)
}else{
   console.log(false) 
}

//remove duplicate from a string
let str="hello world";
let removeDupli=""
for(let i=0;i<str.length;i++){
        if(!removeDupli.includes(str[i])){
            removeDupli+=str[i]
        }
}
console.log(removeDupli)

//or

let str="hello world";
let dupli=[...new Set(str)].join("")
console.log(dupli)

//check anagram or not
let str1="hedllo";
let str2="lleoh";
let sort1=str1.split("").sort().join("");
let sort2=str2.split("").sort().join("");
if(sort1==sort2){
    console.log("this is an anagram")
}else{
    console.log("not an anagram")
}

//or

function anagram(str1,str2){
    return str1.split("").sort().join("")=== str2.split("").sort().join("")
}
console.log(anagram("hello","olleh"))

//first char capital 
let str = "hello world from javascript";
let capitalise=str.split(" ").map((value)=>value.charAt(0).toUpperCase()+value.slice(1)).join(" ")
console.log(capitalise)

//longest word
let str="hello vyshna how are you";
let longer=str.split(" ").reduce((acc,curr)=>acc.length>curr.length?acc:curr,"");
console.log(longer)

//non repeting character
let str="swiss";
for(let i=0;i<str.length;i++){
    if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
        console.log(str[i]);
        break
    }
}

//substring
function getAllSubstrings(str) {
    let substrings = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.substring(i, j));
        }
    }
    return substrings;
}
console.log(getAllSubstrings("abc"));

//find occuranc of character in an array
let str='hello world';
let char="l";
let occurence=str.split(char).length-1;
console.log(occurence)

//first capital
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter("hello")); // "Hello"
