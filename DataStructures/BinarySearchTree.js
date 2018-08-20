class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(data){

        const node = new Node(data);
        // empty tree
        if(this.root === null){
           this.root = node;
        }else{
            this.insertNode(this.root , node);
        }
    }

    insertNode(node,newNode){
       // left node 
       if(newNode.data < node.data){
            if(node.left === null)
                node.left = newNode;
            else
              this.insertNode(node.left,newNode);
        }else{
            if(node.right === null)
            node.right = newNode;
            else
            this.insertNode(node.right,newNode);
        }
    }

    remove(data){
       
    }

    removeNode(node,data){
        if(node === null){
            return null;
        }

        else if(data < node.data){
           node.left = this.removeNode(node.left,data);
           return node;
        }
        else if(data > node.data){
            node.right = this.removeNode(node.right,data);
            return node;
        }else{
            if(node.left === null && node.right === null ){
                node = null;
                return node;
            }
            if(node.left === null){
                node = node.right;
                return node;
            }
            else if(node.right === null){
                node = node.left;
                return node;
            }

            
        }
    }

    inorder(node){
       if(node !== null){
           this.inorder(node.left);
           console.log(node.data);
           this.inorder(node.right);
       }
    }

    getRootNode()
    {
        return this.root;
    }

    // Performs preorder traversal of a tree    
    preorder(node)
    {
        if(node != null)
        {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

}


testBST= ()=>{
  // create an object for the BinarySearchTree
    var BST = new BinarySearchTree();
    
    // Inserting nodes to the BinarySearchTree
    BST.insert(15);
    BST.insert(25);
    BST.insert(10);
    BST.insert(7);
    BST.insert(22);
    BST.insert(17);
    BST.insert(13);
    BST.insert(5);
    BST.insert(9);
    BST.insert(27);

    const root = BST.getRootNode();
    
    //          15
    //         /  \
    //        10   25
    //       / \   / \
    //      7  13 22  27
    //     / \    /
    //    5   9  17 

    // prints 5 7 9 10 13 15 17 22 25 27
    BST.inorder(root);

}

testBST();


