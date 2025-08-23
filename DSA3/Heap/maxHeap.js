class MaxHeap{
    constructor(){
        this.heap=[]
    }
    
    getParentIndex(index){
        if(index === 0){
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
    
    buildHeap(arr){
        this.heap=arr;
        for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
            this.heapifyDown(i)
        }
    }
    
   heapifyUp(index){
       while (index > 0) {
            let parent = this.getParentIndex(index)
            if (this.heap[parent] >= this.heap[index]) {
                break;
            }
            this.swap(parent, index);
            index = parent
        }
   }
   
  heapifyDown(index) {
        let largest = index;
        let leftChildIndex = this.getLeftChildIndex(index);
        let rightChildIndex = this.getRightChildIndex(index);

        if (leftChildIndex !== null && this.heap[leftChildIndex] > this.heap[largest]) {
            largest = leftChildIndex;
        }
        
        if (rightChildIndex !== null && this.heap[rightChildIndex] > this.heap[largest]) {
            largest = rightChildIndex;
        }
        
        if (largest != index) {
            this.swap(index, largest);
            this.heapifyDown(largest)
        }
    }
    
  extractMax(){
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
  
  deleteAt(index){
      if(index<0 || index>=this.heap.length){
          return null
      }
      
      if(index === this.heap.length - 1){
          return this.heap.pop();
      }
      
      const removedValue = this.heap[index];
      this.heap[index] = this.heap.pop();
      
      const parentIndex = this.getParentIndex(index);

      if (parentIndex !== null && this.heap[index] > this.heap[parentIndex]) {
          this.heapifyUp(index);
      } else {
          this.heapifyDown(index);
      }
      
      return removedValue;
  }
  
  peek(){
      return this.heap[0]||null
  }
    
}

let maxhp=new MaxHeap();

maxhp.insert(33)
maxhp.insert(78)
maxhp.insert(24)
maxhp.insert(8)
maxhp.insert(15)

console.log("Heap after inserts:", maxhp.heap);

console.log(maxhp.getParentIndex(4))
console.log(maxhp.getLeftChildIndex(3))

console.log("Extract max:", maxhp.extractMax()); 
console.log("Heap after extractMx:", maxhp.heap);

console.log("Peek max:", maxhp.peek());

let arr = [67, 89, 23, 9, 13, 56, 7, 19, 33, 4, 62];
maxhp.buildHeap(arr);
console.log("Heap built from array:", maxhp.heap);

console.log("Deleted value at index 2:", maxhp.deleteAt(2));
console.log("Heap after deletion:", maxhp.heap); 
