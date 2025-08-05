//selection sort
function selectSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let max=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[max]){
                max=j;
            }
        }
        if(max!==i){
            [arr[i],arr[max]]=[arr[max],arr[i]]
        }
    }
    return arr;
}

let arr=[23,-23,95,46,-4,34]
console.log(selectSort(arr))