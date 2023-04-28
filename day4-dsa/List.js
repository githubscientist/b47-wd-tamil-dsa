class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    printList() {
        let nodes = [];
        let thead = this.head;

        // nodes.push(this.head.data, this.head.next.data, this.head.next.next.data);
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        console.log(nodes);
    }

    push(data) {
        // create a new node
        let newNode = new Node(data);

        // check if the list is empty
        if (this.head == null) {
            this.head = newNode;
        } else {
            // list is not empty
            let thead = this.head;
            while (thead.next != null) {
                thead = thead.next;
            }

            // thead.next = null
            thead.next = newNode;
        }
    }
}

let list = new LinkedList();

// // create a new node
// let newNode = new Node(2);

// // insert the newNode into the list
// list.head = newNode;

// // insert the secondNode into the list
// newNode = new Node(4);

// list.head.next = newNode;

// newNode = new Node(7);
// list.head.next.next = newNode;

// newNode = new Node(8);
// list.head.next.next.next = newNode;
list.push(2);
list.push(4);
list.push(7);
list.push(8);
list.push(9);
list.push(10);
list.push(13);
list.printList();

// console.log(list);

/*
    newNode = Node {
        data: 8,
        next: null
    }

    list.head = Node {
        data: 8,
        next: null
    }
*/

/*
    list = LinkedList {
        head: Node {
            data: 2,
            next: Node {
                data: 4,
                next: null
            }
        }
    }

    newNode = Node {
        data: 4,
        next: null
    }
*/

/*
    list = LinkedList {
        head: Node {
            data: 2,
            next: Node {
                data: 4,
                next: Node {
                    data: 7,
                    next: Node {
                        data: 8,
                        next: null
                    }
                }
            }
        }
    }

    this.head = list.head

    thead = this.head
          = null

    nodes = [2, 4, 7, 8]

    thead.data #8

    thead = thead.next

*/