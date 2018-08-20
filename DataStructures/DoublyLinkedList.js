class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data){
       let node = new Node(data);

       if(this.head === null){
           this.head = node;
           this.tail = node;
       }else{
           this.tail.next = node;
           node.prev = this.tail;
           this.tail = node;
       }
       this.size++;
    }

    prepend(data){
        let node = new Node(data);
 
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }else{
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.size++;
     }

    traverse(node){
        while(node !== null){
            console.log(` Node value : ${ node.data }`);
            node  =  node.next;
        }
     }

     item(index){
         var cur = this.head;
         var counter = 0;
         if(index === 0){
             return this.head.data;
         }else{
             while(cur !== null){
                if(counter === index){
                    return cur.data;
                }
                cur = cur.next;
                counter++;
             }
         }
    }

    getHead(){
        return this.head.data;
    }

    getTail(){
        return this.tail.data;
    }

    getSize(){
        return this.size;
    }

    remove(index){
       let cur = this.head;
       let prev = null;
       let counter = 0;

       while(cur !== null){
           if(counter === index){
              if(prev === null){
                  const val = this.head.data;
                  this.head = cur.next;
                  return val;
              }else{
                  prev.next = cur.next;
                  return cur.data;
              }
              this.size--;
           }
           counter++;
           prev = cur;
           cur = cur.next;
       }
       return -1;
    }

}


fillList = ()=>{
    let list = new DoublyLinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.prepend('aa');
    console.log(list.remove(0));
    list.traverse(list.head);
}

fillList();