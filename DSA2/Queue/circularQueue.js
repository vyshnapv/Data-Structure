class CircularQueue{
    constructor(capacity){//capacity-which represent the max size;
        this.items=new Array(capacity);
        this.capacity=capacity;
        this.currLength=0//track the num of elem 
        this.front=-1;
        this.rear=-1;
    }
    
    isFull(){
        return this.currLength===this.capacity;
    }
    
    isEmpty(){
        return this.currLength===0;
    }
    
    enqueue(value){
        if(!this.isFull()){
            this.rear=(this.rear+1)%this.capacity;
            this.items[this.rear]=value;
            this.currLength+=1;
            if(this.front===-1){
                this.front=this.rear;
            }
        }else{
            console.log("queue is full")
        }
    }
    
    dequeue(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        const item=this.items[this.front];
        this.items[this.front]=null;
        this.front=(this.front+1)%this.capacity;
        this.currLength-=1;
        if(this.isEmpty()){
            this.front=-1;
            this.rear=-1;
        }
        return item;
    }
    
    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null;
    }
    
    print(){
        if(this.isEmpty()){
            return null
        }else{
            let i=0;
            let str="";
            for(i=this.front;i!=this.rear;i=(i+1)%this.capacity){
                str+=this.items[i]+" "
            }
            str+=this.items[i];
            console.log(str)
        }
    }
}

const queue=new CircularQueue(5);
console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
console.log(queue.isFull());
queue.print()
console.log(queue.dequeue())
queue.print()
console.log(queue.peek())