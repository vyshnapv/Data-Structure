//quick sort 
function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    const pivot=arr[0];
    const left=[];
    const right=[];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}

let arr=[78.45,13,-13,-23,90,-56];
console.log(quickSort(arr))

//quick sort in best case
function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let pivot=arr[mid]
    let left=[]
    let right=[];
    for(let i=0;i<arr.length;i++){
        if (i === mid){
             continue;
        }
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
let arr=[21,45,6,12,7,9,23,5];
console.log(quickSort(arr))

//quick sort in average case
function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let randome=Math.floor(Math.random()*arr.length)
    let pivot=arr[randome]
    let left=[]
    let right=[];
    for(let i=0;i<arr.length;i++){
        if (i === randome){
             continue;
        }
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
let arr=[21,45,6,12,7,9,23,5];
console.log(quickSort(arr))

//sort array of string using quick sort
function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[0]
    let left=[]
    let right=[];
    for(let i=1;i<arr.length;i++){
        if(arr[i].toLowerCase()<pivot.toLowerCase()){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
let arr = ["Banana", "apple", "Cherry", "date", "Elderberry"];
console.log(quickSort(arr))