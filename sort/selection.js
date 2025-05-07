//selection sort
function selectSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        if(min!==i){
            [arr[i],arr[min]]=[arr[min],arr[i]]
        }
    }
    return arr;
}

let arr=[23,-23,95,46,-4,34]
console.log(selectSort(arr))