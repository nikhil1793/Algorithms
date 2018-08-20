class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // add Front
    addFront(value) {
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
        } else {
            var firstNode = this.head;

            this.head = node;

            node.next = firstNode;
        }

        this.size++;

    }

    //add Last
    addLast(value) {
        // create a new node
        const node = new Node(value);

        // store the current node
        let currentNode;

        if (this.head == null) {
            this.head = node;
        } else {
            currentNode = this.head;
            //iterate to the end of the list
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }

            // add node at last
            currentNode.next = node;
        }

        this.size++;

    }

    insertAt(value, index) {

        if (index > 0 && index > this.size)
            return;

        const node = new Node(value);
        let cur = this.head;
        let counter = 0;
        let prev;

        while (cur !== null) {
            if (counter === index) {
                let temp = cur;
                cur = node;
                cur.next = temp;
                prev.next = cur;
                this.size++;
                break;
            } else {
                prev = cur;
                cur = cur.next;
            }
            counter++;
        }
    }

    removeFrom(index) {

        if (index < 0) {
            index = this.size + index;
        }

        if (index > 0 && index > this.size)
            return;

        let counter = 0;
        let cur = this.head;
        let prev;
        if (index === 0) {
            this.head = cur.next;
        } else {
            while (cur !== null) {
                if (counter === index) {
                    let value = cur.value;
                    prev.next = cur.next;
                    //break;
                    this.size--;
                    return value;
                } else {
                    prev = cur;
                    cur = cur.next;
                }
                counter++;
            }
        }

        return null;
    }

    removeValue(value) {

        let cur = this.head;
        let prev = null;

        while (cur !== null) {
            if (cur.value === value) {
                if (prev === null) {
                    this.head = cur.next;
                } else {
                    let value = cur.value;
                    prev.next = cur.next;
                    //break;
                }
                this.size--;
                return cur.value;
            }
            prev = cur;
            cur = cur.next;
        }
        return -1;
    }

    indexOf(value) {
        let cur = this.head;
        let prev = null;
        let index = 0;

        while (cur !== null) {
            if (cur.value === value) {
                return index;
            }
            index++;
            prev = cur;
            cur = cur.next;
        }
    }

    traverse(node) {
        while (node !== null) {
            console.log(` Node value : ${node.value}`);
            node = node.next;
        }
    }


}



//Linked List
fillList = () => {
    let list = new LinkedList();
    list.addLast('a');
    list.addLast('b');
    list.addLast('c');
    list.addFront('aa');
    list.addLast('d')
    list.addFront('aaa');
    list.insertAt('bb', 2);
    list.addLast('z');
    list.insertAt('y', 5)
    list.removeValue('aaa');
    list.traverse(list.head);
    console.log('==================');
    list.removeFrom(-1);
    list.traverse(list.head);
    console.log('==================');
    list.removeFrom(-4);
    list.traverse(list.head);
}


fillList();



/*
// For Node
fillNode = () =>{
    let first = new Node('first');

    let second = new Node('second');

    first.next  = second;

    let third = new Node('third');
    second.next = third;

    printList(first);
}

printList = (node) => {
    while(node !== null){
         console.log(node.value);
         node = node.next;
    }
}

fillNode();
*/
