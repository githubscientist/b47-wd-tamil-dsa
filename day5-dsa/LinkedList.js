// define the structure of the node
class Node {
    constructor(data, visible) {
        this.data = data;
        this.next = null;
        this.visible = visible;
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
        let nodes = [];

        while (thead != null) {
            if (thead.visible == true) {
                nodes.push(thead.data);
            }
            thead = thead.next;
        }
        console.log(nodes);
    }

    laterAccessPrint() {
        let thead = this.head;
        let nodes = [];

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }
        console.log(nodes);
    }

}

// linked list creation
let list = new LinkedList();

list.head = new Node(3, true);
list.head.next = new Node(5, false);
list.head.next.next = new Node(7, true);



// console.log(list);
list.laterAccessPrint();

/*
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
*/

/*
    [[3, true],[5, false] ,[7, true]]

*/