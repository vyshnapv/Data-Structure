//bubble sort
//here we use nested loop a for loop and a do while loop.
//so the time complexity is quadratic -o(n^2);

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
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                [arr[i+1],arr[i]]=[arr[i],arr[i+1]]
                swapp=true
            }
        }
    }while(swapp==true)
        return arr
}

const arr=[3,7,4,7,3,7,3,7,3,8,4,7]
console.log(bubble(arr));