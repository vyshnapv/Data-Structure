//stack using linked list
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.top=null;
        this.size=0;
    }
    
    push(value){
        const newNode=new Node(value)
        newNode.next=this.top;
        this.top=newNode;
        this.size++;
    }
    
    pop(){
        if(!this.top){
            console.log("stack underflow");
            return;
        }
        const removed=this.top;
        this.top=this.top.next;
        this.size--;
        return removed.value;
    }
    
    peek(){
        if(!this.top){
            console.log("stack is empty");
            return
        }
       console.log(this.top.value);
    }
    
    isEmpty(){
        return this.size==0
    }
    
    getSize() {
        return this.size;
    }
    
    print(){
        let curr=this.top;
        let result=""
        while(curr){
            result+=`${curr.value} `
            curr=curr.next;
        }
        console.log(result)
    }
}

let stack=new Stack();
stack.push(34)
stack.push(66)
stack.push(89)
stack.push(13)
stack.pop()
stack.peek()
console.log(stack.isEmpty())
console.log(stack.getSize()) 
stack.print()
