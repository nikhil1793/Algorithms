class QElement{
    constructor(element,priority){
      this.element = element;
      this.priority = priority;
    }
}


class PriorityQueue{
    constructor(){
        this.items = [];
    }

    enqueue(element,priority){
        let item = new QElement(element,priority);
        let isConatin = false;

        for(let i=0;i<this.items.length;i++){
            if(this.items[i].priority > item.priority){
                isConatin = true;
                this.items.splice(i,0,item);
                break;
            }
        }

        if(!isConatin){
            this.items.push(item);
        }
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

    rear(){
        if(this.items.length === 0){
            return undefined;
        }
        return this.items.pop();
    }

    printPQueue(){
        this.items
        .map(item => item.element)
        .forEach(item =>console.log(`--> ${item} <-- `));
    }
}

testPriorityQueue = ()=>{
  
    // creating object for queue classs
var priorityQueue = new PriorityQueue();
 
// returns "No elements in Queue"
console.log(priorityQueue.front());
 
// adding elements to the queue
priorityQueue.enqueue("Sumit", 2);
priorityQueue.enqueue("Gourav", 1);
priorityQueue.enqueue("Piyush", 1);
priorityQueue.enqueue("Sunny", 2);
priorityQueue.enqueue("Sheru", 3);
 
// prints [Gourav Piyush Sumit Sunny Sheru]
console.log(priorityQueue.printPQueue());
 
// prints Gourav
console.log(priorityQueue.front().element);
 
// pritns Sheru
console.log(priorityQueue.rear().element);
 
// removes Gouurav
// priorityQueue contains
// [Piyush Sumit Sunny Sheru]
console.log(priorityQueue.dequeue().element);
 
// Adding another element to the queue
priorityQueue.enqueue("Sunil", 2);
 
// prints [Piyush Sumit Sunny Sunil Sheru]
console.log(priorityQueue.printPQueue());

}

testPriorityQueue();