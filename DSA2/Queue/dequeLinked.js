//double ented queue using linked list
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class Deque {
    constructor() {
        this.head = null; // front
        this.tail = null; // rear
    }

    isEmpty() {
        return this.head === null;
    }

    insertFront(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    insertRear(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    removeFront() {
        if (this.isEmpty()) {
            console.log("Deque is empty");
            return null;
        }

        const removedValue = this.head.value;

        if (this.head === this.tail) {
            // Only one node
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        return removedValue;
    }

    removeRear() {
        if (this.isEmpty()) {
            console.log("Deque is empty");
            return null;
        }

        const removedValue = this.tail.value;

        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        return removedValue;
    }

    getFront() {
        if (this.isEmpty()) {
            console.log("Deque is empty");
            return null;
        }
        return this.head.value;
    }

    getRear() {
        if (this.isEmpty()) {
            console.log("Deque is empty");
            return null;
        }
        return this.tail.value;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Deque is empty");
            return;
        }

        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " ";
            current = current.next;
        }

        console.log("Deque: " + result.trim());
    }
}
