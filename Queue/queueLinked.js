class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedLIst {
    constructor(){
        this.head=null;
        this.rear=null;
    }
    
    enqueue(value){
        const newNode=new Node(value);
        if(this.rear){
            this.rear.next=newNode;
        }
        this.rear=newNode;
        
        if(!this.head){
            this.head=newNode;
        }
    }
    
    
    dequeue(){
        if(!this.head){
            return "queue is empty"
        }
        const value=this.head.value;
        this.head=this.head.next;
        return;
        
        if(!this.head){
            this.rear=null;
        }
    }
    
    peek(){
        return this.head?this.head.value:"queue is empty;"
    }
    
    isEmpty(){
            return this.length === 0;
    }
    
   size() {
    let count = 0;
    let current = this.head;
      while (current) {
         count++;
         current = current.next;
       }
      return count;
    }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += ` ${current.value}`;
      current = current.next;
    }
    console.log(result.slice(0, -4).trim());
  }
}


let queues=new LinkedLIst();
queues.enqueue(67)
queues.enqueue(12)
queues.enqueue(33)
queues.print()