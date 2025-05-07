class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }
    
    push(value){
        let newNode=new Node(value);
        newNode.next=this.head;
        this.head=newNode;
    }
    
    //pop element from stack
    pop(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        
        let poppedNode=this.head;
        this.head=this.head.next;
       console.log(`the poped node is ${poppedNode.value}`);
    }
    
    peek(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.head.value;
    }
    
    isEmpty(){
        return this.head===null;
    }
    
    print(){
        let curr=this.head;
        let result="";
        while(curr){
            result+=` ${curr.value}`;
            curr=curr.next;
        }
          console.log(result.trim())
    }
}

let stack=new LinkedList();
stack.push(56)
stack.push(46)
stack.print()
stack.pop()
stack.print()