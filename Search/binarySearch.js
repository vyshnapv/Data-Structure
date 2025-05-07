//fund the index of target in a sorted array
//here the time complexity is O(logn) and space complexity is O(1)
function binarySearch(arr,target){
    let leftIndex=0;
    let rightIndex=arr.length-1;
    
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        
        if(target === arr[middleIndex]){
            return middleIndex;
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1;
        }else{
            leftIndex = middleIndex + 1
        }
    }
    return -1;
 }
 console.log(binarySearch([10, 20, 30, 40, 50], 40))


 function binarySearch(arr,target){
    let leftIndex=0;
    let rightIndex=arr.length-1;
    while(leftIndex<=rightIndex){
        let middleIndex=Math.floor((leftIndex+rightIndex)/2)
        if(target===arr[middleIndex]){
            return middleIndex
        }
        if(target<arr[middleIndex]){
            rightIndex=middleIndex-1
        }else{
            leftIndex=middleIndex+1
        }
    }
    return -1;
}

function moveTarget(arr,target){
    let index=binarySearch(arr,target);
    if(index>0){
        let temp=arr[index];
        for(let i=index;i>0;i--){
            arr[i]=arr[i-1]
        }
        arr[0]=temp;
    }
    return arr;
}

console.log(moveTarget([1,2,3,4,5,6],2))