//insertion sort
function insertion(arr){
    for(let i=1;i<arr.length;i++){
        const key=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>key){
             arr[j+1]=arr[j];
             j--;
        }
        arr[j+1]=key
    }
    return arr;
}

let arr=[23,13,-56,34,-90,24,5];
console.log(insertion(arr))