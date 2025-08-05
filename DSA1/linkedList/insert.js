//inser a new node at the given index in a node
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
    
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }
    
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
        }else{
            let prev=this.head;
            while(prev.next){
                prev=prev.next;
            }
            prev.next=node;
        }
        this.size++;
    }
    
    insert(value,index){
        if(index<0 || index>this.size){
            return;
        }
        if(index===0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev=this.head;
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next;
            prev.next=node
            this.size++;
        }
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
list.append(18)
list.print()
list.insert(11,0)
list.print()
list.insert(78,3)
list.print()

console.log(`the linkedlist is empty? ${list.isEmpty()}`)
console.log(`the size of the linked list is ${list.getSize()}`)
p