//reverse a string
function reverse(str){
    if(str.length==0){
        return ""
    }
    return reverse(str.slice(1))+str[0]
}

console.log(reverse("hello world"))

//to remove a character from a string
function reverse(str){
    if(str.length==0){
        return ""
    }
    let removing=str[0]==="l"?"":str[0]
    return removing+reverse(str.slice(1))
}

console.log(reverse("hello world"))

 //recurtion that recurse only 5 times
 function recursive(count=1){
    if(count>5){
        return ;
    }
     console.log(` ${count}`);
    recursive(count+1)
}
recursive()

//flattend an array using recurtion
function flattendArray(arr){
    return arr.reduce((acc,curr)=>acc.concat(Array.isArray(curr)?flattendArray(curr):curr),[])
 }
 
 console.log(flattendArray([1,[2,3,4],[3,4,6,[7,8,9]]]))

//sumof an array using recurtion
function sumOff(arr){
    if(arr.length==0){
        return 0;
    }
    return arr[0]+sumOff(arr.slice(1))
}

console.log(sumOff([1,2,3,4,5,6]))

//second largest using recurtion
function recursivlely(arr,index=0,largest=-Infinity,secondLargest=-Infinity){
    if(index==arr.length){
        return secondLargest===-Infinity?null:secondLargest;
    }
    let curr=arr[index];
    if(curr>largest){
        secondLargest=largest
        largest=curr
    }else if(curr>secondLargest && curr!==largest){
        secondLargest=curr
    }
    return recursivlely(arr,index+1,largest,secondLargest)
}

let arr = [1, 2, 32, 34, 5, 344];
console.log(recursivlely(arr)); 

//sum of array using recursion
function sumOf(arr){
    if(arr.length===0){
        return 0;
    }
    return arr[0]+sumOf(arr.slice(1))
}

let arr=[1,3,2,4,4,34];
console.log(sumOf(arr))
