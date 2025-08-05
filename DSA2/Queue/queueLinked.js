//queue using linkedlist
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.head=null;
        this.rear=null;
        this.length=0;
    }
    
   enqueue(value){
       let newNode=new Node(value)
       if(this.isEmpty()){
           this.head=newNode;
           this.rear=newNode;
       }else{
           this.rear.next=newNode;
           this.rear=newNode;
       }
       this.length++;
   }
   
   dequeue(){
       if(this.isEmpty()){
           console.log("queue is empty");
           return;
       }
       const removed=this.head.value;
       this.head=this.head.next;
       
       if(!this.head){
           this.rear=null;
       }
       this.length--;
       return removed
   }
   
   peek(){
       if(this.isEmpty()){
           console.log("queue is empty");
           return null;
       }
       console.log(this.head.value)
   }
   
   isEmpty(){
       return this.length===0
   }
   
   print(){
       let curr=this.head;
       let result=""
       while(curr){
           result+=`${curr.value} `
           curr=curr.next;
       }
       console.log(result)
   }
}

let que=new Queue();
que.enqueue(78)
que.enqueue(90)
que.enqueue(45)
que.print()
que.dequeue()
que.print()
que.peek()