var inorderTraversal = function(root) {
    var arr = [];

    function pushRoot(root){
        if(root !== null){
            if(root.left !== null){
                pushRoot(root.left);
            }
            arr.push(root.val);
            if(root.right !== null){
                pushRoot(root.right);
            }
        }
    }
    pushRoot(root);
    return arr;
};