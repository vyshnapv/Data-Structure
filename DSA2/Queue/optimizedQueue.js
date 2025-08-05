class Optimized{
    constructor(){
        this.items={};
        this.rear=0;
        this.front=0;
    }
    
    enqueue(value){
        this.items[this.rear]=value;
        this.rear++;
    }
    
    dequeue(){
        const item=this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    
    isEmpty(){
        return this.rear-this.front===0;
    }
    
    peek(){
        return this.items[this.front]
    }
    
    size(){
        return this.rear-this.front
    }
    
    print(){
        console.log(this.items)
    }
}

let optimize=new Optimized();
console.log(optimize.isEmpty());
optimize.enqueue(87)
optimize.enqueue(64)
optimize.enqueue(43)
optimize.print()
console.log(optimize.size())
optimize.print()
console.log(optimize.dequeue())
optimize.print()
console.log(optimize.peek())
