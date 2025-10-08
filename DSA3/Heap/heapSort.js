//heap sort to sort an array using max heap
function heapify(arr,n,i){
    let largest=i;
    let left=2*i+1;
    let right=2*i+2;
    
    if(left<n && arr[left] > arr[largest]){
        largest=left;
    }
    
    if(right<n && arr[right]>arr[largest]){
        largest=right;
    }
    
    if(largest != i){
        [arr[i],arr[largest]]=[arr[largest],arr[i]]
        heapify(arr,n,largest)
    }
}


function heapSort(arr){
    let n=arr.length;
    
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
    
    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr;
}

let arr=[12,11,13,5,6,7];
console.log("original array:",arr)
console.log("sorted array:",heapSort(arr));

//heap sort to sort an array using min heap
function heapify(arr,n,i){
    let smallest=i;
    let left=2*i+1;
    let right=2*i+2;
    
    if(left<n && arr[left] < arr[smallest]){
        smallest=left;
    }
    
    if(right<n && arr[right]<arr[smallest]){
        smallest=right;
    }
    
    if(smallest != i){
        [arr[i],arr[smallest]]=[arr[smallest],arr[i]]
        heapify(arr,n,smallest)
    }
}


function heapSort(arr){
    let n=arr.length;
    
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
    
    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr;
}

let arr=[12,11,13,5,6,7];
console.log("original array:",arr)
console.log("sorted array:",heapSort(arr));

//heap sort to sort a string
function heapify(arr, n, i) {
    let largest = i; 
    let left = 2 * i + 1; 
    let right = 2 * i + 2; 

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function heapSortString(str) {
    let arr = str.split("");
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr.join(""); 
}

let str = "heapSort";
console.log("Original String:", str);
console.log("Sorted String:", heapSortString(str));

//using an array of object
function heapify(arr,n,i,key){
    let largest=i;
    let left=2*i+1;
    let right=2*i+2;
    
    if(left<n && arr[left][key]>arr[largest][key]){
        largest=left
    }
    
    if(right<n && arr[right][key]>arr[largest][key]){
        largest=right
    }
    
    if(largest!=i){
        [arr[i],arr[largest]]=[arr[largest],arr[i]]
        heapify(arr,n,largest,key)
    }
}

function heapSort(arr,key){
    let n=arr.length
    
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i,key)
    }
    
    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,i,0,key)
    }
    return arr
}
let students=[
    {name:"vyshna",mark:57},
    {name:"ayush",mark:21},
    {name:"nasif",mark:37},
    {name:"ajin",mark:72},
    {name:"nihal",mark:56}
    ]
console.log(heapSort(students,"mark"))