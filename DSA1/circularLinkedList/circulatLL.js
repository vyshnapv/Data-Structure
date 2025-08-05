class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    prepend(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
            node.next = node;
            node.prev = node;
        } else {
            node.next = this.head;
            node.prev = this.tail;
            this.head.prev = node;
            this.tail.next = node;
            this.head = node;
        }
        this.size++
    }

    append(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            node.next = node;
            node.prev = node;
        } else {
            node.next = this.head;
            node.prev = this.tail;
            this.tail.next = node;
            this.head.prev = node;
            this.tail = node;
        }
        this.size++
    }

     insert(index, value) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else if (index === this.size) {
            this.append(value);
        } else {
            let node = new Node(value);
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            node.next = curr.next;
            node.prev = curr;
            curr.next.prev = node;
            curr.next = node;
            this.size++;
        }
    }
  
    removeFromFront(){
       if(this.isEmpty()){
           return null;
       }
       let value=this.head.value;
       if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = this.tail;
            this.tail.next = this.head;
        }
        this.size--;
        return value;
    }

    removeFromEnd(){
        if(this.isEmpty()){
           return null;
       }
       let value=this.tail.value;
       if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = this.head;
            this.head.prev = this.tail;
        }
        this.size--;
        return value;
    }
    
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        if (index === 0) {
            return this.removeFromFront();
        }
        if (index === this.size - 1) {
            return this.removeFromEnd();
        }
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
        this.size--;
        return curr.value;
    }
    
    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        let curr = this.head;
        let index = 0;
        do {
            if (curr.value === value) {
                return this.removeAt(index);
            }
            curr = curr.next;
            index++;
        } while (curr !== this.head);
        return null;
    }
    
   reverse() {
        let curr = this.head;
        let temp = null;
        if (this.isEmpty()) return;
        do {
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev;
        } while (curr !== this.head);
        this.head = temp.prev;
    }


    search(value) {
        let curr = this.head;
        let index = 0;
        if (this.isEmpty()) return -1;
        do {
            if (curr.value === value) {
                return index;
            }
            curr = curr.next;
            index++;
        } while (curr !== this.head);
        return -1;
    }
    
    print() {
      if (this.isEmpty()) {
          console.log("list is empty");
      } else {
          let curr = this.head;
          let listValues = "";
          do {
              listValues += ` ${curr.value}`;
              curr = curr.next;
          } while (curr !== this.head);
            console.log(listValues);
       }
    }
}

const cll=new CircularLinkedList();
cll.append(10)
cll.append(56)
cll.append(78)
cll.append(98)
cll.print(); 
cll.prepend(90)
cll.print(); 
cll.insert(1,67)
cll.print(); 
cll.removeFromFront()
cll.print();
cll.removeFromEnd()
cll.print();
cll.removeAt(1);
cll.print();
cll.removeValue(56) 
cll.print();
cll.reverse()
cll.print()
console.log(cll.search(78))
cll.print()