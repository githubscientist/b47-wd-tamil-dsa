class item {
    constructor(data) {
        this.data = data;
        item.next = null;
    }
}

class Array {
    constructor() {
        this.head = null;
    }

    print() {
        let items = [];
        let thead = this.head;
        while (thead != null) {
            items.push(thead.data);
            thead = thead.next;
        }
        console.log(items);
    }

    push(data) {
        let newItem = new item(data);
        if (this.head == null) {
            this.head = newItem;
        } else {
            let thead = this.head;
            while (thead.next != null) {
                thead = thead.next;
            }
            thead.next = newItem;
        }
    }

    forEach(func) {
        let index = 0;
        let thead = this.head;
        while (thead != null) {
            func(thead.data, index++);
            thead = thead.next;
        }
    }
}

module.exports = Array;