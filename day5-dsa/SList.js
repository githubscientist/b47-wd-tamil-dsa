// define the structure of the node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// define the structure of the linked list
class LinkedList {
    constructor() {
        this.head = null;
    }

    // methods of the linked list
    printList() {
        let thead = this.head;
        
        while (thead != null) {
            console.log(thead.data);
            thead = thead.next;
        }
    }

    insertTail(data) {
        if (this.head == null) {
            // list is empty
            this.head = new Node(data);
        } else {
            // list is not empty
            let thead = this.head;

            while (thead.next != null) {
                thead = thead.next;
            }

            // thead.next == null
            thead.next = new Node(data);
        }
    }

    insertHead(data) {
        if (this.head == null) {
            this.head = new Node(data);
        } else {
            let newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    splice(index, deleteCount, value=null) {
        if (index == 0 && deleteCount == 0 && value != null) {
            // insert the value at the head
            this.insertHead(value);
        } else if (deleteCount == 0 && value != null) {
            // insert the value at the specified index

        }
    }
}

// linked list creation
let list = new LinkedList();

// list.insertTail(3);
// list.insertTail(5);
// list.insertTail(6);
// list.insertTail(7);
// list.insertTail(8);
// list.insertTail(9);
// list.insertHead(2);

// list.splice(0, 0, 1);

let array = [1, 2, 3, 4, 5, 6];
for (let value of array) {
    list.insertTail(value);
}

list.printList();