//insert at front,end,remove at end,front using tail in linked list.
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class linkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0
    }
    
    getSize(){
        return this.size;
    }
    
    prepend(value){//0(1)time complexity
       const node=new Node(value);
       if(this.isEmpty()){
           this.head=node;
           this.tail=node;
       }else{
           node.next=this.head;
           this.head=node;
       }
       this.size++;
    }
    
    append(value){//0(1)time complexity
      const node=new Node(value);
      if(this.isEmpty()){
          this.head=node;
          this.tail=node
      }else{
          this.tail.next=node;
          this.tail=node;
      }
      this.size++;
    }
    
    removeFromFront(){//0(1)time complexity
      if(this.isEmpty()){
          return null;
      }
      const value=this.head.value;
      this.head=this.head.next;
      this.size--;
      return value
    }
    
    removeFromEnd(index){//O(n)time complexity
       if(this.isEmpty()){
           return null;
       }
       const value=this.tail.value;
       if(this.size==1){
           this.head=null;
           this.tail=null;
       }else{
           let prev=this.head;
           while(prev.next!==this.tail){
               prev=prev.next;
           }
           prev.next=null;
           this.tail.prev;
       }
       this.size--;
       return value;
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
list.append(1)
list.append(2)
list.append(3)
list.prepend(6)
list.removeFromEnd()
list.print()
list.removeFromFront()
list.print()


console.log(`the linkedlist is empty? ${list.isEmpty()}`)
console.log(`the size of the linked list is ${list.getSize()}`)
