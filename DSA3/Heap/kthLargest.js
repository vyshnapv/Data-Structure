class MinHeap{
    constructor(){
        this.heap=[]
    }
    
    getParentIndex(index){
        if(index <= 0){
           return null; 
        }
        return Math.floor((index-1)/2);
    }
    
    getLeftChildIndex(index){
        let left=2*index+1
        return left<this.heap.length?left:null
    }
    
    getRightChildIndex(index){
        let right = 2 * index + 2; 
        return right < this.heap.length ? right : null;
    }
    
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }
    
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }
    
   heapifyUp(index){
       while (index > 0) {
            let parent = this.getParentIndex(index)
            if (this.heap[parent] <= this.heap[index]) {
                break;
            }
            this.swap(parent, index);
            index = parent
        }
   }
   
  heapifyDown(index) {
        let smallest = index;
        let leftChildIndex = this.getLeftChildIndex(index);
        let rightChildIndex = this.getRightChildIndex(index);

        if (leftChildIndex !== null && this.heap[leftChildIndex] < this.heap[smallest]) {
            smallest = leftChildIndex;
        }
        
        if (rightChildIndex !== null && this.heap[rightChildIndex] < this.heap[smallest]) {
            smallest = rightChildIndex;
        }
        
        if (smallest != index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest)
        }
    }
    
  extractMin(){
       if(this.heap.length===0){
           return null;
       }
       if(this.heap.length===1){
           return this.heap.pop()
       }
      
       const root=this.heap[0];
       this.heap[0]=this.heap.pop();
       this.heapifyDown(0)
       return root;
   }
  
  peek(){
      return this.heap[0]||null
  }
  
  size() {
      return this.heap.length;
  }
}

function findKthLargest(arr,k){
    const minHeap=new MinHeap()
    
    for(let num of arr){
        if(minHeap.size()<k){
            minHeap.insert(num)
        }else if(num>minHeap.peek()){
            minHeap.extractMin()
            minHeap.insert(num)
        }
    }
    return minHeap.peek();
}

let minhp=new MinHeap();

minhp.insert(33)
minhp.insert(78)
minhp.insert(24)
minhp.insert(8)
minhp.insert(15)

console.log("Heap after inserts:", minhp.heap);

console.log(minhp.getParentIndex(4))
console.log(minhp.getLeftChildIndex(3))

console.log("Extract min:", minhp.extractMin()); 
console.log("Heap after extractMin:", minhp.heap);

console.log("Peek min:", minhp.peek());

let arr = [67, 89, 23, 9, 13, 56, 7, 19, 33, 4, 62];
let k=3;
console.log(`${k}th largest element is:`, findKthLargest(arr, k));