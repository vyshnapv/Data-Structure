//merge sort
function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    const mid=Math.floor(arr.length/2);
    const leftArray=arr.slice(0,mid);
    const rightArray=arr.slice(mid);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray,rightArray){
    const sortedArray=[];
    while(leftArray.length && rightArray.length){
        if(leftArray[0]<=rightArray[0]){
            sortedArray.push(leftArray.shift());
        }else{ 
            sortedArray.push(rightArray.shift());
        }
    }
   return [...sortedArray,...leftArray,...rightArray]
}


const arr=[1,23,-3,40,-78,36,9]
console.log(mergeSort(arr))

