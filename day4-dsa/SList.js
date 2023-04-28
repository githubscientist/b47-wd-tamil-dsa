// Linked List Types
/*
    1. Singly Linked List
    2. Doubly Linked List
    3. Circularly Linked List

    Singly Linked List

    every data is stored in a node.
    every node in a linked list contains two fields. data -> stores the data, next -> next node address
    every node will be linked to the next node or null node.


*/
// define a class
// class Node {
//     constructor() {
//         this.count = 0;
//     }
// }

// // create an object to the class Node
// let node = new Node();

// console.log(node);

// class Student {
//     constructor(name, age, location) {
//         this.name = name;
//         this.age = age;
//         this.location = location;
//     }
// }

// let student101 = new Student('Krish', 24, 'CBE');
// let student102 = new Student('Sathish', 25, 'CHE');

// console.log(student102);

// function Student(name, age, location) {
//     this.name = name;
//     this.age = age;
//     this.location = location;
// }

// let student101 = new Student('Krish', 24, 'CBE');

// console.log(student101);

// class Student {
//     name; 
//     age;
//     phone1;
//     phone2;
// }

// let student101 = new Student();

// console.log(student101);

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let node1 = new Node(4);

let node2 = new Node(5);
node1.next = node2;

node2 = new Node(7);
node1.next.next = node2;

console.log(node1);

/*
    node1 = Node {
        data: 4,
        next: Node {
            data: 5,
            next: Node {
                data: 7,
                next: null
            }
        }
    }

    node1 = Node {
        data: 4,
        next: null
    }

    node2 = Node {
        data: 5,
        next: null
    }

    node3 = Node {
        data: 7,
        next: null
    }
*/

// [[4, 6], [7, 8], [2, 3]]