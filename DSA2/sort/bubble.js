//Bubble sort(best case)
function bubbleSort(arr){
    let swapped;
    for(let i=0;i<arr.length;i++){
        swapped=false;
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
              let temp=arr[j];
              arr[j]=arr[j+1];
              arr[j+1]=temp;
              swapped=true
            }
        }
        if(!swapped){
           break;
        }
    }
    return arr;
}

//another
function bubbleSort(arr){
    let swapped;
    for(let i=0;i<arr.length;i++){
        swapped=false;
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                swapped=true;
            }
        }
        if(!swapped){
           break;
        }
    }
    return arr;
}

let arr=[66,90,78,12,23,1,56]
console.log(bubbleSort(arr))

//bubble sort(best case using do while)
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

//aslo use this(average case and worst case)
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