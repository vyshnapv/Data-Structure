//to visualise the node in the console.print the node
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class linkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0
    }
    
    getSize(){
        return this.size;
    }
    
    prepend(value){//prepend have constand time complexity
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }
    
    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        }else{
            let curr=this.head;
            let listValues="";//store node values
            while(curr){
                listValues +=` ${curr.value}`
                curr=curr.next;
            }
            console.log(listValues)
        }
    }
}

const list=new linkedList;
list.print()
list.prepend(10)
list.print()
list.prepend(20)
list.print()

console.log(`the linkedlist is empty? ${list.isEmpty()}`)
console.log(`the size of the linked list is ${list.getSize()}`)


