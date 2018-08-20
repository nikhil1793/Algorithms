class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(item){
       this.items.push(item);
    }

    dequeue(){
        if(this.items.length === 0){
            return undefined;
        }
        return this.items.shift();
    }

    front(){
        if(this.items.length === 0){
            return undefined;
        }
        return this.items[0];
    }

    printQueue(){
        this.items.forEach(item =>console.log(`--> ${item} <-- `));
    }
}


function fillQueue(){
    // creating object for queue class
var queue = new Queue();
             
 
// Testing dequeue and pop on an empty queue
// returns Underflow
console.log(queue.dequeue());
 
// returns true
//console.log(queue.isEmpty());
 
// Adding elements to the queue
// queue contains [10, 20, 30, 40, 50]
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
 
// returns 10
console.log(queue.front());
 
// removes 10 from the queue
// queue contains [20, 30, 40, 50, 60]
console.log(queue.dequeue());
 
// returns 20
console.log(queue.front());
 
// removes 20
// queue contains [30, 40, 50, 60]
console.log(queue.dequeue());
 
// printing the elements of the queue
// prints [30, 40, 50, 60]
console.log(queue.printQueue());
}

fillQueue();

generatePrintBinary = (n)=>{

   let q = new Queue();

   q.enqueue("1");

   while(n-- > 0) {

     let s1 = q.front();
     q.dequeue();
     console.log(`==> ${s1} <== \n`);

     //save s1 state before changing it
     let s2 = s1;

     q.enqueue(s1+'0');

     q.enqueue(s2 + '1');

   }

}


generatePrintBinary(12);