function linearSearch(arr,target,index=0){
    if(index>=arr.length){
        return -1;
    }
    if(arr[index]===target){
        return index;
    }
    return linearSearch(arr,target,index+1)
 }
 let arr=[1,2,3,1,32,42,23,2,23,3,13]
 console.log(linearSearch(arr,23))