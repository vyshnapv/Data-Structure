//create node and linked list classes
class node{//define node class
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class linkedList{//define linked list class
    constructor(){
        this.head=null;
        this.size=0;//to check the number of nodes in linked list
    }
    
    isEmpty(){
        return this.size===0
    }
    
    getSize(){
        return this.size
    }
}

const list=new linkedList;
console.log(`the list is empty? ${list.isEmpty()}`)
console.log(`the size of the linked list is ${list.getSize()}`)






class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        
    }
}

class linkedList{
    constructor(){
        this.head=null;
    }
    
    prepend(value){
        let newNode=new Node(value)
        newNode.next=this.head;
        this.head=newNode;
    }
    
    append(value){
        let newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
            return;
        }
        let curr=this.head;
        while(curr.next){
            curr=curr.next;
        }
        curr.next=newNode;
    }
    
    insert(value,index){
        if(index===0){
            this.prepend(value)
        }else{
            const newNode=new Node(value);
            let curr=this.head;
            for(let i=0;i<index-1;i++){
                curr=curr.next;
            }
            newNode.next=curr.next;
            curr.next=newNode;
        }
    }
    
    remove(index){
        if(index==0){
            this.head=this.head.next;
            return;
        }
        let curr=this.head;
        let prev=null;
        let count=0;
        
        while(curr!=null && count<index){
            prev=curr;
            curr=curr.next;
            count++;
        }
        prev.next=curr.next;
       
    }
    
    print(){
        let curr=this.head;
        let result="";
        while(curr){
            result+=` ${curr.value}`;
            curr=curr.next;
        }
        console.log(result)
    }
    
}

const linked=new linkedList;
linked.append(99)
linked.prepend(19)
linked.append(29)
linked.print()
linked.insert(23,2)
linked.print()
linked.remove(1)
linked.print()