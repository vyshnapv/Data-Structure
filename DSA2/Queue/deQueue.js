class Dequeue{
    constructor(){
        this.queue=[];
    }
    
    insertATFront(value){
        this.queue.unshift(value)
    }
    
    insertATRear(value){
        this.queue.push(value)
    }
    
    removeFront(){
         if (this.isEmpty()) {
            console.log("Deque is empty");
            return null;
        }
        return this.queue.shift()
    }
    
    removeRear(){
         if (this.isEmpty()) {
            console.log("Deque is empty");
            return null;
        }
        return this.queue.pop()
    }
    
    getFront(){
         if (this.isEmpty()) {
            console.log("Deque is empty");
            return null;
        }
        return this.queue[0]   
    }
    
    getRear(){
         if (this.isEmpty()) {
            console.log("Deque is empty");
            return null;
        }
        return this.queue[this.queue.length-1]   
    }
    
   isEmpty() {
        return this.queue.length === 0;
    }
    
     print() {
        console.log(this.queue);
    }
}

let dq = new Dequeue();
dq.insertATFront(10);
dq.insertATRear(20);
dq.insertATFront(5);
dq.print();

console.log(dq.removeRear()); 
console.log(dq.removeFront());
dq.print(); 
