//bubble sort
function bubbleSort(arr){
    let swapped;
    do{
      swapped=false
      for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
            swapped=true;
        }
      }
    }while(swapped)
}

let arr1=[-2,3,11,-34,8,2,-78,3,5];
bubbleSort(arr1)
console.log(arr1)

//another way(not use temp)
function bubble(arr){
    let swapp;
    do{
        swapp=false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                swapp=true
            }
        }
    }while(swapp==true)
        return arr
}

const arr=[3,7,4,7,3,7,3,7,3,8,4,7]
console.log(bubble(arr));

//aslo use this 
function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}
let nums=[5,3,4,1];
console.log(bubbleSort(nums))