class Stack{
    constructor(){
        this.stackItems = [];
        this.size = 0;
    }

    push(item){
        this.stackItems.push(item);
        this.size++;
    }

    pop(){
        if(this.size === 0){
            //throw new Error('Stack is Empty');
            return undefined;
        }
        this.size--;
        return this.stackItems.pop();
    }

    printStack(){
        this.stackItems.forEach(x=>console.log(x));
    }

    peek(){
        return this.stackItems[this.size -1 ];
    }

    isEmpty(){
        return this.size === 0 ? true : false;
    }

    postfixCalculation(expression){
       const expArr = expression.split('');
       var stack = new Stack();
       for( let i = 0; i< expArr.length; i++ ){
       //expArr.forEach(x=>{
           if(!isNaN(expArr[i])){
               stack.push(+expArr[i]);
           }else{
            
               const rV = stack.pop();
               const lV = stack.pop();
               if(rV === undefined || lV === undefined)
                   return "Can not perform Postfix evaluation";
               
               switch(expArr[i]){
                    case '+' :
                      stack.push(lV + rV);
                      break;
                    case '-' :
                        stack.push(lV - rV);
                        break;
                    case '*' :
                        stack.push(lV * rV);
                        break;
                    case '/' :
                        stack.push(lV / rV);
                        break;
               }
           }
      // });
    }
       return stack.pop();
    }

    //You are given a stack in which element are filled at runtime. 
    //And normal push and pop operation. Now write a function min 
    //which you minimum element in stack at any particular instance.

    findMin(arr){
       const stack = new Stack();
       arr.forEach(item => stack.push(item));
       return stack.stackItems.sort()[0];
    }

    printRepeating(arr)
    {
        
        console.log("The repeating elements are: \n");
        for (let i = 0; i < arr.length; i++)
        {
            if (arr[Math.abs(arr[i])] >= 0)
            arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])];
            else
            console.log(Math.abs(arr[i]));
        }
    }

    removeRepetativeConsecutiveElement(){
        
    }
}


createStack = ()=>{
    const stack = new Stack();
    stack.push(1);
    stack.pop();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.pop();
    //console.log(stack.peek());
    //stack.printStack();
    //console.log(stack.postfixCalculation('234*+45-+'));
    //console.log(stack.postfixCalculation("23*+"));
    const min = stack.findMin([2,3,1,88,33,-8,55]);
    console.log(min);
    stack.printRepeating([2,3,1,88,33,9,55,1]);
}

createStack();



