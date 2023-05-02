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
        
    }

}

// linked list creation
let list = new LinkedList();

// list.head = new Node(3);
// list.head.next = new Node(5);
// list.head.next.next = new Node(7);
// list.head.next.next.next = new Node(9);

list.insertTail(3);
list.insertTail(5);
list.insertTail(6);
list.insertTail(7);
list.insertTail(8);
list.insertTail(9);
list.insertHead(10);

list.printList();


/*
    Stopping Condition: thead == null
    Running Condition: thead != null

    list = LinkedList {
        head: Node {
            data: 3,
            next: Node {
                data: 5,
                next: Node {
                    data: 7,
                    next: null
                }
            }
        }
    }

    Stopping Condition: Node.next == null
    Running Condition: Node.next != null
*/

/*
    

*/