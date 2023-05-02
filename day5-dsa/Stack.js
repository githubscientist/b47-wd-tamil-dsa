// Array Implementation and Object Implementation

class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;// this.top = this.top + 1
    }

    tos() {
        return this.items[this.top];
    }

    pop() {
        this.items.pop();
        this.top--;// this.top = this.top - 1
    }

    isEmpty() {
        // return this.top == -1;
        if (this.top == -1) {
            return true;
        } else {
            return false;
        }
    }
}

let stack = new Stack();

stack.push(1);// top = 0
stack.push(2);// top = 1
stack.push(3);// top = 2
stack.pop();// top = 1
stack.push(5);// top = 2
stack.pop();// top = 1
stack.pop();// top = 0
stack.pop();// top = -1

console.log(stack.isEmpty());

/*
    stack = [I, am,]

    words = [I, am, john, cena, cena, john]

    word = john

*/