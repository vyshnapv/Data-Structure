class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinked{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    
    prepend(value){
        const newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{
            newNode.next=this.head;
            this.head.prev=newNode;
            this.head=newNode;
        }
    }
    
    append(value){
        const newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode
        }
    }
    
     deleteWithValue(value){
        if(!this.isEmpty()){
            let curr=this.head;
            while(curr){
                if(curr.value==value){
                    if(curr== this.head && curr==this.tail){
                    this.head=null;
                    this.tail=null;
                    }else if(curr == this.head){
                    this.head=this.head.next;
                    this.head.prev=null
                    }else if(curr == this.tail){
                    this.tail=this.tail.prev;
                    this.tail.next=null;
                    }
                    else{
                    curr.prev.next=curr.next;
                    curr.next.prev=curr.prev;
                    }
                     this.size--;
                     return
                }
                curr=curr.next
            }
        }
    }
    
     reverseList(){
        if(!this.isEmpty()){
           let curr=this.head;
           let temp=null;
           while(curr){
               temp=curr.next;
               curr.next=curr.prev
               curr.prev=temp
               curr=temp
           }
           temp=this.head;
           this.head=this.tail;
           this.tail=temp
        }
    }
    
    print(){
        let result="";
        let curr=this.head;
        while(curr){
            result+=` ${curr.value}`;
            curr=curr.next;
        }
        console.log(result.trim())
    }
}

const dlist=new DoublyLinked()
dlist.prepend(63)
dlist.prepend(43)
dlist.prepend(90)
dlist. print()
dlist.append(435)
dlist.append(234)
dlist.append(935)
dlist. print()